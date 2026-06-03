import { Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export default function RootLayout() {
  return (
    <>
      <header>
        <nav className="hidden md:w-full md:p-4 md:flex md:gap-4">
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
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
