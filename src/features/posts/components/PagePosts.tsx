import PostOverview from './PostOverview';
import type { Post } from '@/features/posts/types/post.type';
import { Route } from '@/routes/posts';

export default function PagePosts() {
  const { posts }: { posts: Array<Post> } = Route.useLoaderData();
  return (
    <section id="page-posts">
      <h1>Posts Page</h1>
      <p>Loaded with Axios + Router Loader</p>
      {posts.slice(0, 10).map((post) => (
        <PostOverview post={post} />
      ))}
    </section>
  );
}
