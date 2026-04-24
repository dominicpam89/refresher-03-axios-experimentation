import { useMutation, useQuery } from '@tanstack/react-query';
import { queryKeys } from '@/features/blog/query-key';
import { getPosts, createPost } from '@/features/blog/api';
import { queryClient } from '@/lib/query-client-provider';

export const useGetPosts = () => {
  return useQuery({
    queryKey: queryKeys.list(),
    queryFn: getPosts,
  });
};

export const useCreatePost = () => {
  return useMutation({
    mutationFn: createPost,
    onError(error, variables, onMutateResult, context) {
      console.error('fail to create post', error);
      console.log('variables: ', variables);
      console.log('onMutateResult: ', onMutateResult);
      console.log('context: ', context);
    },
    onMutate(variables, context) {
      console.log('creating post...');
      console.log('variables: ', variables);
      console.log('context: ', context);
    },
    onSuccess: (data, variables, onMutateResult, context) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.list() });
      console.log('data: ', data);
      console.log('variables: ', variables);
      console.log('onMutateResult: ', onMutateResult);
      console.log('context: ', context);
    },
  });
};
