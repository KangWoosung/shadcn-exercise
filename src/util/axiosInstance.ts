// /src/util/axiosInstance.js
import axios from "axios";

// Axios 인스턴스 생성 및 설정
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export default axiosInstance;
