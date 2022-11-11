import { FaBlenderPhone } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { selectorIsLoggedIn, selectorUserName } from 'redux/auth/authSelector';
import { Wrapper, TitleHomePage, HomeLink } from './HomePage.styled';

export default function HomePage() {
  const nameUser = useSelector(selectorUserName);
  const isLoggedIn = useSelector(selectorIsLoggedIn);
  return (
    <Wrapper>
      {isLoggedIn && <TitleHomePage>Hello, {nameUser}!</TitleHomePage>}

      <HomeLink to="contacts">
        {' '}
        <FaBlenderPhone size="350px" />
      </HomeLink>
    </Wrapper>
  );
}
