import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Post } from '@/features/posts/types/post.type';
import { Link } from '@tanstack/react-router';

interface Props {
  post: Post;
  currentPage: number;
}

export default function PostOverview({ post, currentPage }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea neque eius
          blanditiis laboriosam, amet, sapiente sint odit doloremque ex quae
          necessitatibus nobis. Ipsa id rem aliquid, a saepe aliquam atque?
        </CardDescription>
      </CardHeader>
      <CardContent>
        {post.body.substring(0, 100)}...
        <Button asChild variant="link">
          <Link
            to="/posts/$id"
            params={{ id: post.id.toString() }}
            search={{ page: currentPage }}
          >
            Read More
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
