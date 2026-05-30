import { createRouter, RouterProvider } from '@tanstack/react-router';
import { axiosInstance } from './lib/axios';
import { routeTree } from './routeTree.gen';

const router = createRouter({
  context: {
    axiosInstance,
  },
  routeTree,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
