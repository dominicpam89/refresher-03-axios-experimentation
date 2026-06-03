import { createFileRoute } from '@tanstack/react-router';
import Form from '@/features/contact/components/Form';

export const Route = createFileRoute('/contact')({
  loader: async ({ context }) => {
    return { axios: context.axiosInstance };
  },
  component: Form,
});
