/*   2024-07-14 16:45:22

YAGNI
You aren't gonna need it.
useAxiosFetch3 에서는,
훅이 cancelRequest 펑션을 리턴하지 않고, 모든 fetchData 호출시에 직전 request 를 cancel 해준다. 
useAxiosFetch2 버전은 지나치게 복잡하고 확장성에 불필요하게 신경쓴 결과물이다.
나는 그것을 필요로 하게 되지는 않을 것이다.
useAxiosFetch3 의 기능이면 충분하다.
*/

import { useState, useRef, useCallback, useEffect } from "react";
import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  Canceler,
} from "axios";
import axiosInstance from "@/util/axiosInstance";

interface State<T> {
  data: T | null;
  loading: boolean;
  error: AxiosError | null;
}

function useAxiosFetch<T>() {
  const [state, setState] = useState<State<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const cancelRef = useRef<Canceler | null>(null);

  // cancelPreviousRequest 가 참조하고있는 cancelRef 는 항상 최신의 객체를 참조하게 된다.
  // 때문에, 이 펑션은 메모이제이션 할 필요가 없다. 메모이제이션에도 비용이 소모된다.
  const cancelPreviousRequest = () => {
    if (cancelRef.current) {
      cancelRef.current("Request canceled due to new request");
      cancelRef.current = null;
    }
  };

  const fetchData = useCallback(
    async (endpoint: string, config: AxiosRequestConfig = {}) => {
      cancelPreviousRequest();

      setState((prev) => ({ ...prev, loading: true }));

      try {
        const response: AxiosResponse<T> = await axiosInstance.request<T>({
          url: endpoint,
          ...config,
          cancelToken: new axios.CancelToken((c) => {
            // 다음 렌더링 또는 fetch 액션에서 참조할 cancel 펑션을  ref 에 보관한다.
            cancelRef.current = c;
          }),
        });

        setState({
          data: response.data,
          loading: false,
          error: null,
        });

        return response.data;
      } catch (error) {
        if (!axios.isCancel(error)) {
          setState({
            data: null,
            loading: false,
            error: error as AxiosError,
          });
        }
        throw error;
      }
    },
    []
  );

  // 커스텀 훅 내부에서 사용하는 useEffect의 클린업 함수는 이 훅을 사용하는 컴포넌트의 라이프사이클에 맞춰 실행됩니다.
  useEffect(() => {
    return () => {
      cancelPreviousRequest();
    };
  }, []);

  return { fetchData, ...state };
}

export default useAxiosFetch;
