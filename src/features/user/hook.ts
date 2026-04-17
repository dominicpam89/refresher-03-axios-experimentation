import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '@/features/user/query-key';
import { getUsers } from '@/features/user/api';

export const useGetUsers = () => {
  return useQuery({
    queryKey: queryKeys.list(),
    queryFn: getUsers,
  });
};
