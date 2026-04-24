import type { PostType } from '@/type';
import { HeartIcon, HeartOffIcon } from 'lucide-react';

interface BlogReactionsProps {
  reactions: PostType['reactions'];
}

export function BlogReactions({ reactions }: BlogReactionsProps) {
  return (
    <div className="flex gap-3">
      <div className="flex gap-1 items-center">
        <HeartIcon size={16} className="text-primary" />
        <span>{reactions.likes}</span>
      </div>
      <div className="flex gap-1 items-center">
        <HeartOffIcon size={16} className="text-destructive" />
        <span>{reactions.dislikes}</span>
      </div>
    </div>
  );
}
