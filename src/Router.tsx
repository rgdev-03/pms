import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { Nav } from './components/Nav/nav';
import { Subgrid } from './components/dash/dashboard';
import { HeaderTabs } from './components/header/header';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/nav',
    element: <Nav />,
  },
  {
    path: '/dashboard',
    element: <Subgrid/>,
  },
  {
    path: '/header',
    element: <HeaderTabs/>,
  },
]);


export function Router() {
  return <RouterProvider router={router} />;
}
