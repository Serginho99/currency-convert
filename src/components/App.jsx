import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import authOperations from 'redux/auth/authOperations';
import UserRoutes from './Routes/UserRoutes';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.currentUser());
  }, [dispatch]);

  return (
    <>
      <UserRoutes />
    </>
  );
}
