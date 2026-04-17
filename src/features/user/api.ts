import { apiUser } from '@/lib/axios-config';
import type { AxiosResponse } from 'axios';
import type { ResponseUserType } from '@/type';

export const getUsers = async function () {
  const {
    data: { users },
  }: AxiosResponse<ResponseUserType> = await apiUser.get('/users');
  return users;
};
