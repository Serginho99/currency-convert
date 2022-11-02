import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectorIsLoggedIn } from 'redux/auth/authSelector';

export default function PrivateRoute() {
  const isLoggedIn = useSelector(selectorIsLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="login" />;
  }

  return <Outlet />;
}
