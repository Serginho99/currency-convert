import Section from 'components/section/Section';
// import { FaBlenderPhone } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { selectorIsLoggedIn, selectorUserName } from 'redux/auth/authSelector';
import { Wrapper, TitleHomePage, HomeLink, Svg } from './HomePage.styled';

export default function HomePage() {
  const nameUser = useSelector(selectorUserName);
  const isLoggedIn = useSelector(selectorIsLoggedIn);
  return (
    <>
      <Section>
        <Wrapper>
          {isLoggedIn && <TitleHomePage>Hello, {nameUser}!</TitleHomePage>}

          <HomeLink to="contacts">
            {' '}
            <Svg />
          </HomeLink>
        </Wrapper>
      </Section>
    </>
  );
}
