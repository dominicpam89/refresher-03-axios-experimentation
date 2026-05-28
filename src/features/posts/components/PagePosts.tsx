import PostOverview from './PostOverview';
import type { Post } from '@/features/posts/types/post.type';

interface Props {
  posts: Array<Post>;
}

export default function PagePosts({ posts }: Props) {
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
