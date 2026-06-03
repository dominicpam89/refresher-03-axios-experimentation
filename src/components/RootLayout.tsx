import { Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export default function RootLayout() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/auth?register">Register</Link>
          <Link to="/auth?login">Login</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>
      </header>
      <main className="max-w-lg min-w-xs mx-auto p-4 lg:p-8">
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </>
  );
}
