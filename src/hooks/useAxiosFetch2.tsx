/*  2024-07-14 15:45:35

useAxiosFetch  ver.03

*/

import { useState, useCallback, useRef, useEffect } from "react";
import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  CancelTokenSource,
} from "axios";
import axiosInstance from "@/util/axiosInstance";

interface State<T> {
  data: T | null;
  loading: boolean;
  error: AxiosError | null;
}

type FetchDataFunction = <T>(
  endpoint: string,
  config?: AxiosRequestConfig
) => Promise<T>;

function useAxiosFetch<T>() {
  const [state, setState] = useState<State<T>>({
    data: null,
    loading: false,
    error: null,
  });

  // cancel action 의 타겟 id
  // 렌더링을 관통하는 저장소 기능을 하는 useRef 를 활용해서 cancel 타겟 id 를 저장합니다.
  const cancelTokenSourcesRef = useRef<Map<string, CancelTokenSource>>(
    new Map()
  );
  const endpointRequestIdRef = useRef<Map<string, string>>(new Map());

  const cancelRequest = useCallback((requestId: string) => {
    const source = cancelTokenSourcesRef.current.get(requestId);
    if (source) {
      source.cancel("Operation canceled by the user.");
      cancelTokenSourcesRef.current.delete(requestId);
    }
  }, []);

  const fetchData: FetchDataFunction = useCallback(
    (endpoint: string, config: AxiosRequestConfig = {}) => {
      // 신규 requestId 를 생성하고, 같은 endpoint 에 대한 이전 requestId 를 가져옵니다.
      const newRequestId = `${endpoint}-${Date.now()}`;
      const prevRequestId = endpointRequestIdRef.current.get(endpoint);

      // 이전 요청이 있다면 취소.
      if (prevRequestId) {
        cancelRequest(prevRequestId);
      }

      // 새 요청 ID를 저장합니다.
      endpointRequestIdRef.current.set(endpoint, newRequestId);

      const source = axios.CancelToken.source();
      cancelTokenSourcesRef.current.set(newRequestId, source);

      setState((prevState) => ({ ...prevState, loading: true }));

      return new Promise((resolve, reject) => {
        axiosInstance
          .request({
            url: endpoint,
            ...config,
            cancelToken: source.token,
          })
          .then((response: AxiosResponse) => {
            setState({
              data: response.data,
              loading: false,
              error: null,
            });
            resolve(response.data);
          })
          .catch((error: AxiosError) => {
            if (axios.isCancel(error)) {
              // axios.isCancel(error) 는 사용자의 요청으로 인한 취소 상황이므로 error 객체에 할당해서 보고할 필요가 없습니다.
              console.log("Request canceled:", error.message);
            } else {
              // 그 외 에러 상황은 error 객체에 할당해서 보고합니다.
              setState({
                data: null,
                loading: false,
                error,
              });
            }
            reject(error);
          })
          .finally(() => {
            cancelTokenSourcesRef.current.delete(newRequestId);
            // 요청이 완료된 후 해당 엔드포인트의 요청 ID를 제거합니다.
            if (endpointRequestIdRef.current.get(endpoint) === newRequestId) {
              endpointRequestIdRef.current.delete(endpoint);
            }
          });
      });
    },
    []
  );

  useEffect(() => {
    return () => {
      // 혹시 남아있을 수 있는 fetch 요청들을 전부 취소합니다.
      cancelTokenSourcesRef.current.forEach((source) =>
        source.cancel("Component unmounted")
      );
      cancelTokenSourcesRef.current.clear();
      endpointRequestIdRef.current.clear();
    };
  }, []);

  return { fetchData, cancelRequest, ...state };
}

export default useAxiosFetch;
