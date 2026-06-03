import { createFileRoute } from '@tanstack/react-router';
import Form from '@/features/contact/components/Form';

export const Route = createFileRoute('/contact')({
  component: Form,
});
