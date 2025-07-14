import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import MainLayout from './Layouts/MainLayout.jsx';
import Home from './pages/Home.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import HousePlantsPage from './pages/HousePlantsPage.jsx';
import SucculentsPage from './pages/SucculentsPage.jsx';
import FlowersPage from './pages/FlowersPage.jsx';
import { Provider } from 'react-redux';
import store from './store/store.js';

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/products',
        element: <ProductsPage />,
      },
      {
        path: '/products/house-plants',
        element: <HousePlantsPage />,
      },
      {
        path: '/products/succulents',
        element: <SucculentsPage />,
      },
      {
        path: '/products/flowers',
        element: <FlowersPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
