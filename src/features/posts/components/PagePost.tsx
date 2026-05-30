import { useLoaderData, useNavigate } from '@tanstack/react-router';
import PostOverview from './PostOverview';
import PageNavigation from './PageNavigation';

export default function PagePost() {
  const { posts, page, hasMore } = useLoaderData({
    from: '/posts',
  });

  const navigate = useNavigate();

  const goToPage = (newPage: number) => {
    navigate({
      to: '/posts',
      search: { page: newPage },
      replace: true,
    });
  };

  const navigationProps = { page, hasMore, goToPage };

  return (
    <section id="page-posts" className="flex flex-col gap-4">
      <h1>Paginated Posts Page</h1>
      <PageNavigation {...navigationProps} />
      {posts.map((post) => (
        <PostOverview key={post.id} post={post} />
      ))}
    </section>
  );
}
