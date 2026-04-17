import type { ResponseUsers, User } from '@/types/user-type';

export type ProductImageUrlType = `http${string}` | `www${string}`;

export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: ProductImageUrlType;
};

export type UserType = User;
export type ResponseUserType = ResponseUsers;
