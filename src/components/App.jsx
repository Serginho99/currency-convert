import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectorIsLoggedIn } from 'redux/auth/authSelector';
import { useEffect } from 'react';
import authOperations from 'redux/auth/authOperations';
import UserRoutes from './Routes/UserRotues';

export default function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectorIsLoggedIn);
  const navigation = useNavigate();

  useEffect(() => {
    dispatch(authOperations.currentUser());
  }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn) {
      navigation('contacts');
    } else {
      navigation('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  return (
    <>
      <UserRoutes />
    </>
  );
}
