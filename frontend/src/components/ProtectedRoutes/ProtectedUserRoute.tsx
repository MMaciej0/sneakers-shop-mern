import useUserStore from '../../hooks/state/useUserStore';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedUserRoute = () => {
  const { user } = useUserStore();

  if (user) {
    return <Outlet />;
  } else {
    return <Navigate to={'/'} />;
  }
};

export default ProtectedUserRoute;
