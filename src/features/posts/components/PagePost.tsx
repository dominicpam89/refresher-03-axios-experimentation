import { useLoaderData, useNavigate } from '@tanstack/react-router';
import PostOverview from './PostOverview';

export default function PagePost() {
  const { posts, page, hasMore } = useLoaderData({
    from: '/posts',
  });
  return (
    <section id="page-posts" className="flex flex-col gap-4">
      <h1>Paginated Posts Page</h1>
      {posts.map((post) => (
        <PostOverview key={post.id} post={post} />
      ))}
    </section>
  );
}
