import { Outlet, Link } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export default function RootLayout() {
  return (
    <>
      <header>
        <nav className="w-full flex gap-2 p-4 items-center">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/auth" search={{ authType: 'login' }}>
            Login
          </Link>
          <Link to="/auth" search={{ authType: 'register' }}>
            Register
          </Link>
        </nav>
      </header>
      <main className="mx-auto mt-8 max-w-lg min-w-xs p-4 lg:p-8">
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </>
  );
}
