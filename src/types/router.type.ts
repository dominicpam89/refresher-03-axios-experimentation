import type { API } from '@/lib/axios';
import { type AuthContext } from './auth-context.type';

export type RouterContext = {
  api: API;
  auth: AuthContext | undefined;
};
