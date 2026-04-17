import { apiUser } from '@/lib/axios-config';
import type { AxiosResponse } from 'axios';
import type { UserType } from '@/type';

export const getUsers = async function () {
  const { data }: AxiosResponse<UserType> = await apiUser.get('/users');
  return data;
};
