import type { PostType } from '@/type';
import BlogTag from './BlogTag';

interface BlogTagsProps {
  tags: PostType['tags'];
}

export default function BlogTags({ tags }: BlogTagsProps) {
  const totalTags = tags.length;
  return (
    <div className="flex gap-1 justify-start">
      {tags.map((tag, index) => (
        <>
          <BlogTag tag={tag} />
          {index < totalTags - 1 && <span>&#44; &nbsp;</span>}
        </>
      ))}
    </div>
  );
}
