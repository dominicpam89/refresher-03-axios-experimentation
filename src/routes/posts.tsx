import { createFileRoute } from '@tanstack/react-router';
import PagePost from '@/features/posts/components/PagePost';
import type { Post } from '@/features/posts/types/post.type';

export const Route = createFileRoute('/posts')({
  validateSearch: (search: Record<string, unknown>) => ({
    page: typeof search.page === 'number' ? search.page : 1,
  }),
  loaderDeps: ({ search }) => ({ page: search.page }),
  loader: async ({ deps, context }) => {
    const { page } = deps;
    const response = await context.axiosInstance.get<Array<Post>>('/posts', {
      params: { _page: page, _limit: 10 },
    });
    return {
      posts: response.data,
      page,
      hasMore: response.data.length === 10,
    };
  },
  component: PagePost,
});
