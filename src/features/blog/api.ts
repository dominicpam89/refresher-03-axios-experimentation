import { apiPost } from '@/lib/axios-config';
import type { PostResponseType } from '@/type';
import type { AxiosResponse } from 'axios';

export const getPosts = async function () {
  const { data }: AxiosResponse<PostResponseType> = await apiPost.get('/posts');
  return data;
};
