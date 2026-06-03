import { createRootRouteWithContext } from '@tanstack/react-router';
import type { RouterContext } from '@/types/router.type';
import RootLayout from '@/components/RootLayout';

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootLayout,
});
