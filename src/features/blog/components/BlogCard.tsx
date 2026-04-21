import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { PostType } from '@/type'; // your PostType definition
import BlogTags from './BlogTags';

interface BlogCardProps {
  blog: PostType;
}

export function BlogCard({ blog }: BlogCardProps) {
  const content = blog.body.slice(0, 100);
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle className="line-clamp-2 text-lg">{blog.title}</CardTitle>
        <div className="flex gap-2">
          <div>{blog.reactions.likes}</div>
          <div>{blog.reactions.dislikes}</div>
        </div>
        <CardDescription>
          <BlogTags tags={blog.tags} />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <span>{content}...</span>
        <Button variant="link">View More</Button>
      </CardContent>
    </Card>
  );
}
