import { createFileRoute } from '@tanstack/react-router';
import FormRegister from '@/features/auth/components/FormRegister';

export const Route = createFileRoute('/register')({
  component: FormRegister,
});
