import { useGetPosts } from '@/features/blog/hooks/query-hooks';
import LoadingUI from '@/components/Loading';
import { ErrorDisplay } from '@/components/ErrorDisplay';
import { BlogCard } from '@/features/blog/components/BlogCard';

export default function PageBlogs() {
  const { data, error, isLoading, isFetching } = useGetPosts();
  console.log('isLoading: ', isLoading);
  console.log('isFetching: ', isFetching);
  if (isLoading || isFetching) return <LoadingUI />;
  if (error || !data) return <ErrorDisplay errorMessage={error?.message} />;
  if (data && data.total === 0) return <div>No Post. Create one!</div>;
  return (
    <div className="w-full">
      {data.posts.map((post) => (
        <BlogCard key={post.id} blog={post} />
      ))}
    </div>
  );
}
