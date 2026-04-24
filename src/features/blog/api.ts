import { apiPost } from '@/lib/axios-config';
import type { PostCreateResponseType, PostCreateType, PostsResponseType } from '@/type';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';

export const getPosts = async function () {
  const { data }: AxiosResponse<PostsResponseType> = await apiPost.get('/posts');
  return data;
};

export const createPost = async function (newPost: PostCreateType) {
  const requestConfig: AxiosRequestConfig<PostCreateType> = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response: AxiosResponse<PostCreateResponseType> = await apiPost.post(
    '/posts/add',
    {
      ...newPost,
      userId: 5,
    },
    requestConfig
  );
  return response.data;
};
