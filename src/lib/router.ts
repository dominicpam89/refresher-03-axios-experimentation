import LayoutBlog from '@/pages/LayoutBlog';
import LayoutProduct from '@/pages/LayoutProduct';
import PageBlogCreate from '@/pages/PageBlogCreate';
import PageBlogDetail from '@/pages/PageBlogDetail';
import PageBlogEdit from '@/pages/PageBlogEdit';
import PageBlogs from '@/pages/PageBlogs';
import PageHome from '@/pages/PageHome';
import PageProductCreate from '@/pages/PageProductCreate';
import PageProductDetail from '@/pages/PageProductDetail';
import PageProductEdit from '@/pages/PageProductEdit';
import PageProducts from '@/pages/PageProducts';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
  { path: '/', Component: PageHome },
  {
    path: '/blogs',
    Component: LayoutBlog,
    children: [
      { index: true, Component: PageBlogs },
      { path: ':id', Component: PageBlogDetail },
      { path: ':id/edit', Component: PageBlogEdit },
      { path: 'create', Component: PageBlogCreate },
    ],
  },
  {
    path: '/products',
    Component: LayoutProduct,
    children: [
      { index: true, Component: PageProducts },
      { path: ':id', Component: PageProductDetail },
      { path: ':id/edit', Component: PageProductEdit },
      { path: 'create', Component: PageProductCreate },
    ],
  },
]);
