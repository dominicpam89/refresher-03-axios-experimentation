import { createFileRoute } from '@tanstack/react-router';
import FormLogin from '@/features/auth/components/FormLogin';

export const Route = createFileRoute('/login')({
  component: FormLogin,
});
