import { createFileRoute } from '@tanstack/react-router';
import PageDashboard from '@/features/dashboard/components/PageDashboard';

export const Route = createFileRoute('/dashboard')({
  component: PageDashboard,
});
