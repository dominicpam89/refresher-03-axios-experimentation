import { Outlet, Link } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export default function ShadcnTest() {
  return (
    <>
      <header>
        <nav className="flex gap-2 items-center shadow-md shadow-gray-800/50 p-4">
          <Link to="/">Home</Link>
          <Link to="/posts">Posts Page</Link>
        </nav>
      </header>
      <main className="mx-auto max-w-lg min-w-xs">
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </>
  );
}
