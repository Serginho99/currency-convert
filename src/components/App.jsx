import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import authOperations from 'redux/auth/authOperations';
import UserRoutes from './Routes/UserRoutes';
import { selectorLoadingUser } from 'redux/auth/authSelector';

export default function App() {
  const dispatch = useDispatch();
  const isLoadingUser = useSelector(selectorLoadingUser);

  useEffect(() => {
    dispatch(authOperations.currentUser());
  }, [dispatch]);

  return <>{isLoadingUser ? <p>load</p> : <UserRoutes />}</>;
}
