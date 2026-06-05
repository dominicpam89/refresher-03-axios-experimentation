import { createFileRoute } from '@tanstack/react-router';
import { searchSchema } from '@/schema/auth-route.schema';
import PageAuth from '@/features/auth/components/PageAuth';

export const Route = createFileRoute('/auth')({
  validateSearch: searchSchema,
  component: PageAuth,
});
