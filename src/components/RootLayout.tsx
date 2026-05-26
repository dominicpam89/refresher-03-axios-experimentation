import { Outlet, Link } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export default function RootLayout() {
  return (
    <>
      <header>
        <nav className="flex gap-2 items-center">
          <Link to="/">Home</Link>
          <Link to="/about/42">About 42</Link>
          <Link to="/about/99">About 99</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </>
  );
}
