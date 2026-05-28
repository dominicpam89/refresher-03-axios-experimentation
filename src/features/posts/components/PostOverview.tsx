import { Button } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { Post } from '@/features/posts/types/post.type';

interface Props {
  post: Post;
}

export default function PostOverview({ post }: Props) {
  const { id, body, title } = post;
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
          dolore consectetur quos quasi repudiandae beatae quod quidem quaerat?
          Minima adipisci laborum impedit sapiente voluptatum porro amet quae
          nihil ad perspiciatis!
        </CardDescription>
        <CardAction>Back to Post</CardAction>
      </CardHeader>
      <CardContent>
        <p>{body.substring(0, 100)}</p>
        <Button variant="link">Continue to read</Button>
      </CardContent>
      <CardFooter>
        <p>Post with id: {id}</p>
      </CardFooter>
    </Card>
  );
}
