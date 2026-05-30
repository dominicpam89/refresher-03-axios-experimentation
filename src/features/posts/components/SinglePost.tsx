import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardAction,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link, useLoaderData, useSearch } from '@tanstack/react-router';

export default function SinglePost() {
  const { post } = useLoaderData({ from: '/posts/$id' });
  const { page } = useSearch({ from: '/posts/$id' });
  return (
    <Card className="mt-12">
      <CardHeader>
        <CardAction>
          <Button asChild variant="link">
            <Link to="/posts" search={{ page }}>
              Back to Posts Page
            </Link>
          </Button>
        </CardAction>
        <CardTitle>{post.title}</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea neque eius
          blanditiis laboriosam, amet, sapiente sint odit doloremque ex quae
          necessitatibus nobis. Ipsa id rem aliquid, a saepe aliquam atque?
        </CardDescription>
      </CardHeader>
      <CardContent>{post.body.substring(0, 100)}...</CardContent>
    </Card>
  );
}
