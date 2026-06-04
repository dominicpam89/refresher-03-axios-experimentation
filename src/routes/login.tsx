import { createFileRoute } from '@tanstack/react-router';
import FormLogin from '@/features/auth/components/FormLogin';

export const Route = createFileRoute('/login')({
  loader: ({ context }) => {
    const axios = context.api;
    return { axios };
  },
  component: FormLogin,
});
