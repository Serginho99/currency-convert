import { selectorIsLoggedIn } from 'redux/auth/authSelector';
import { useSelector } from 'react-redux';
import UserMenu from 'components/UserMenu/UserMenu';
import NavAuth from './NavAuth';
import { Logo, Nav, NavBox, NavList, Span } from './NavBar.styled';

export default function NavBar() {
  const isLoggedIn = useSelector(selectorIsLoggedIn);

  return (
    <>
      <Nav>
        <Logo to="/">
          Phone<Span>Book</Span>
        </Logo>{' '}
        <NavBox>
          {/* <NavList to="/" end>
            Home
          </NavList>{' '} */}
          {isLoggedIn && <NavList to="contacts">Contacts</NavList>}
        </NavBox>
        {!isLoggedIn ? <NavAuth /> : <UserMenu />}
      </Nav>
    </>
  );
}
