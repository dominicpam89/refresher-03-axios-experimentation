import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { PostType } from '@/type'; // your PostType definition
import BlogTags from './BlogTags';
import { BlogReactions } from '@/features/blog/components/BlogReactions';

interface BlogCardProps {
  blog: PostType;
}

export function BlogCard({ blog }: BlogCardProps) {
  const content = blog.body.slice(0, 100);
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle className="line-clamp-2 text-lg font-black">{blog.title}</CardTitle>
        <BlogReactions reactions={blog.reactions} />
        <CardDescription>
          <BlogTags tags={blog.tags} />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <span className="font-light">{content}...</span>
        <Button variant="link" className="cursor-pointer">
          View More
        </Button>
      </CardContent>
    </Card>
  );
}
