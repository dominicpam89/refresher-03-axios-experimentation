import { useQuery } from '@tanstack/react-query';
import { queryKey } from '@/features/product/query-key';
import { getProducts } from '@/features/product/api';

export const useProducts = () => {
  return useQuery({
    queryKey: queryKey.list(),
    queryFn: getProducts,
  });
};
