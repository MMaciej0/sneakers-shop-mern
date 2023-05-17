import useCartStore from '../hooks/state/useCartStore';
import useUserStore from '../hooks/state/useUserStore';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const { user } = useUserStore();
  const { cartItems } = useCartStore();

  if (user && cartItems.length) {
    return <Outlet />;
  } else {
    return <Navigate to={'/'} />;
  }
};

export default ProtectedRoute;
