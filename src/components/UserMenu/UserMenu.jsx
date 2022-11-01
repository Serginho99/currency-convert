import { useDispatch, useSelector } from 'react-redux';
import { selectorUserName } from 'redux/auth/authSelector';
import authOperations from 'redux/auth/authOperations';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(selectorUserName);
  return (
    <>
      <p>Hello {name}</p>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log Out
      </button>
    </>
  );
}
