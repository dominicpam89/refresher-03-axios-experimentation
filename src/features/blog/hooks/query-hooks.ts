import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '@/features/blog/query-key';
import { getPosts } from '@/features/blog/api';

export const useGetPosts = () => {
  return useQuery({
    queryKey: queryKeys.list(),
    queryFn: getPosts,
  });
};
