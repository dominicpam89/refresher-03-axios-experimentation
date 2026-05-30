import SinglePost from '@/features/posts/components/SinglePost';
import type { Post } from '@/features/posts/types/post.type';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/posts/$id')({
  loader: async ({ params, context }) => {
    const { id } = params;
    const response = await context.axiosInstance.get<Post>('/posts/' + id);
    return {
      post: response.data,
    };
  },
  component: SinglePost,
});
