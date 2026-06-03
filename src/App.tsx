import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from '@/routeTree.gen';
import { axiosInstance } from '@/lib/axios';

const router = createRouter({
  routeTree,
  context: {
    axiosInstance,
  },
});

declare module '@tanstack/react-router' {
  export interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
