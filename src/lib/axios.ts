import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_LOCALHOST || 'http://localhost:5173',
  timeout: 10000,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

type NavigateFn = (url: string) => void;
let navigateFn: NavigateFn | undefined = undefined;
export const setNavigateForInterceptor = (fn: (url: string) => void) => {
  navigateFn = fn;
};

api.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response?.status === 401 && navigateFn) {
      localStorage.removeItem('token');
      navigateFn('/login');
    }
    return Promise.reject(error);
  }
);
