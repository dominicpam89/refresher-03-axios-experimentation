import { Outlet, Link } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export default function RootLayout() {
  return (
    <>
      <header>
        <nav className="flex gap-2 items-center shadow-sm shadow-gray-400 dark:shadow-gray-500">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </>
  );
}
