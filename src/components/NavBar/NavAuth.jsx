import { NavLink } from 'react-router-dom';

export default function NavAuth() {
  return (
    <>
      <NavLink to="register">register</NavLink>{' '}
      <NavLink to="login">login</NavLink>
    </>
  );
}
