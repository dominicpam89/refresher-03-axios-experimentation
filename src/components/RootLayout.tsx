import { Outlet, Link } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export default function RootLayout() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/posts">Posts</Link>
        </nav>
        <main>
          <Outlet />
        </main>
        <TanStackRouterDevtools />
      </header>
    </>
  );
}
