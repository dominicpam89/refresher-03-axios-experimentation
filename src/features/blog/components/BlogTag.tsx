import { Button } from '@/components/ui/button';

interface BlogTagProps {
  tag: string;
}

export default function BlogTag({ tag }: BlogTagProps) {
  return (
    <Button variant="ghost" size="xs">
      {tag}
    </Button>
  );
}
