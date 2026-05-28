import { createRootRoute } from '@tanstack/react-router';
import { axiosInstance } from '@/lib/axios';
import type { AxiosInstance } from 'axios';
import RootLayout from '@/components/RootLayout';

export interface RouterContext {
  axiosInstance: typeof axiosInstance;
}

export const Route = createRootRoute<AxiosInstance>({
  component: RootLayout,
});
