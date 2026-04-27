import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import BlogCreateForm from '@/features/blog/components/BlogCreateForm';

export default function PageBlogCreate() {
  return (
    <div className="w-screen h-screen -mt-12 flex justify-center items-center">
      <Card className="w-full max-w-md py-12 sm:px-12">
        <CardHeader>
          <CardTitle>Create Post</CardTitle>
          <CardDescription>Enter title, body, and add tags as new post</CardDescription>
        </CardHeader>
        <CardContent>
          <BlogCreateForm />
        </CardContent>
        <CardFooter className="flex gap-2 w-full pb-12">
          <Button type="reset" variant="outline" className="w-1/2">
            Reset
          </Button>
          <Button type="submit" className="w-1/2">
            Create
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
