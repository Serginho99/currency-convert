import { useDispatch, useSelector } from 'react-redux';
import { selectorUserName } from 'redux/auth/authSelector';
import authOperations from 'redux/auth/authOperations';
import { Wrapper, Text, Btn } from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(selectorUserName);
  return (
    <>
      <Wrapper>
        <Text>Hello, {name}</Text>
        <Btn onClick={() => dispatch(authOperations.logOut())}>log out</Btn>
      </Wrapper>
    </>
  );
}
