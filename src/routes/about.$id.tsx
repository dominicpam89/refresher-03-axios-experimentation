import { createFileRoute } from '@tanstack/react-router';
import PageAbout from '@/components/PageAbout';

export const Route = createFileRoute('/about/$id')({
  component: PageAbout,
});
