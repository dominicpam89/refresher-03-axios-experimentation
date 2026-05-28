import RootLayout from '@/components/RootLayout';
import { createRootRouteWithContext } from '@tanstack/react-router';
import type { RouterContext } from '@/types/router-context.type';

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootLayout,
});
