import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import authOperations from 'redux/auth/authOperations';
import UserRoutes from './Routes/UserRoutes';
import { selectorLoadingUser } from 'redux/auth/authSelector';
import { GlobalStyles } from 'GlobalStyles.styled';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const dispatch = useDispatch();
  const isLoadingUser = useSelector(selectorLoadingUser);

  useEffect(() => {
    dispatch(authOperations.currentUser());
  }, [dispatch]);

  return (
    <>
      <GlobalStyles />
      {isLoadingUser ? <p>load</p> : <UserRoutes />}
    </>
  );
}
