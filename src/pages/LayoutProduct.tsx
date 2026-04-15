import { Outlet } from 'react-router';

export default function LayoutProduct() {
  return (
    <>
      <header>Header Product</header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
}
