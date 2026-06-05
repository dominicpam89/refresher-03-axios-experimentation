import { createRootRouteWithContext } from '@tanstack/react-router';
import RootLayout from '@/components/RootLayout';
import type { RouterContext } from '@/types/router.type';

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootLayout,
});
