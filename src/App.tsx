import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import { api, setNavigateForInterceptor } from '@/lib/axios';
import { useAuth } from './context/auth.context';

const router = createRouter({
  routeTree,
  context: {
    api,
    auth: undefined,
  },
});

declare module '@tanstack/react-router' {
  export interface Register {
    router: typeof router;
  }
}

export default function App() {
  const auth = useAuth();
  router.update({ context: { auth, api } });
  setNavigateForInterceptor((to) => router.navigate({ to }));
  return <RouterProvider router={router} />;
}
