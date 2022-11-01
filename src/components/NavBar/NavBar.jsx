import { NavLink } from 'react-router-dom';
import { selectorIsLoggedIn } from 'redux/auth/authSelector';
import { useSelector } from 'react-redux';
import UserMenu from 'components/UserMenu/UserMenu';
import NavAuth from './NavAuth';

export default function NavBar() {
  const isLoggedIn = useSelector(selectorIsLoggedIn);

  return (
    <>
      <nav>
        <NavLink to="/">logo</NavLink> <NavLink to="/">Home</NavLink>{' '}
        {isLoggedIn && <NavLink to="contacts">Contacts</NavLink>}
        {!isLoggedIn ? <NavAuth /> : <UserMenu />}
      </nav>
    </>
  );
}
