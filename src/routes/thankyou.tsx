import { createFileRoute } from '@tanstack/react-router';
import PageThankyou from '@/features/contact/components/PageThankyou';

export const Route = createFileRoute('/thankyou')({
  component: PageThankyou,
});
