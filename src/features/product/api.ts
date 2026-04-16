import { apiProduct } from '@/lib/axios-config';
import type { AxiosResponse } from 'axios';
import type { ProductType } from '@/type';

export const getProducts = async function () {
  const { data }: AxiosResponse<ProductType[]> = await apiProduct.get('/products');
  return data;
};
