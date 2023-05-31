import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import App from './App';
import HomePage from './pages/HomePage';
import SingleProductPage from './pages/SingleProductPage';
import CartPage from './pages/CartPage';
import PlaceOrderPage from './pages/PlaceOrderPage';
import UserProfile from './pages/UserProfile';
import ProtectedOrderRoute from './components/protectedRoutes/ProtectedOrderRoute';
import ProtectedUserRoute from './components/protectedRoutes/ProtectedUserRoute';

import './index.css';

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<HomePage />} />
      <Route path="products/:slug" element={<SingleProductPage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="" element={<ProtectedOrderRoute />}>
        <Route path="placeorder" element={<PlaceOrderPage />} />
      </Route>
      <Route path="" element={<ProtectedUserRoute />}>
        <Route path="profile" element={<UserProfile />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
