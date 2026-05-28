import PagePosts from '@/features/posts/components/PagePosts';
import type { Post } from '@/features/posts/types/post.type';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/posts')({
  loader: async ({ context }) => {
    const { axiosInstance } = context;
    // https://jsonplaceholder.typicode.com/posts
    // baseURL + string in below axiosInstance get
    const response = await axiosInstance.get<Array<Post>>('/posts');
    return { posts: response.data.slice(0, 10) };
  },
  component: PagePosts,
});
