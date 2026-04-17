import type { ResponseUsers, User } from '@/types/user-type';
import type { Post, PostCreate } from '@/types/blog-type';

export type ProductImageUrlType = `http${string}` | `www${string}`;

export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: ProductImageUrlType;
};

// User Type
export type UserType = User;
export type ResponseUserType = ResponseUsers;

// Post Type
export type PostType = Post;
export type PostCreateType = PostCreate;
