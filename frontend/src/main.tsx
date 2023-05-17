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
import ProtectedRoute from './components/ProtectedRoute';
import PlaceOrderPage from './pages/PlaceOrderPage';

import './index.css';

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<HomePage />} />
      <Route path="products/:slug" element={<SingleProductPage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="" element={<ProtectedRoute />}>
        <Route path="placeorder" element={<PlaceOrderPage />} />
      </Route>
      {/* ... etc. */}
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
