import { Outlet } from 'react-router';

export default function LayoutUser() {
  return (
    <>
      <header>Header Users</header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
}
