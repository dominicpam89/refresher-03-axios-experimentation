import { Button } from '@/components/ui/button';

interface Props {
  page: number;
  hasMore: boolean;
  goToPage: (page: number) => void;
}

export default function PageNavigation({ page, hasMore, goToPage }: Props) {
  return (
    <div aria-label="post-navigation" className="p-4 flex gap-2 items-center">
      <Button
        variant="link"
        onClick={() => goToPage(page - 1)}
        disabled={page <= 1}
      >
        Previous
      </Button>
      <span>Page {page}</span>
      <Button
        variant="link"
        onClick={() => goToPage(page + 1)}
        disabled={!hasMore}
      >
        Next
      </Button>
    </div>
  );
}
