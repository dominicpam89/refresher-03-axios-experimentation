import type { PostType } from '@/type';
import { Button } from '@/components/ui/button';

interface BlogTagsProps {
  tags: PostType['tags'];
}

export default function BlogTags({ tags }: BlogTagsProps) {
  return (
    <div className="flex gap-1 justify-start">
      {tags.map((tag, index) => (
        <Button key={index} variant="outline" size="xs" className="rounded-xs cursor-pointer">
          {tag}
        </Button>
      ))}
    </div>
  );
}
