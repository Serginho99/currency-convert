import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Span = styled.span`
  color: black;
  /* font-weight: 600; */
`;

export const LogoMenu = styled(NavLink)`
  color: white;
  font-size: 40px;
  font-weight: 300;
  padding: 5px;
  display: flex;
  text-align: center;
  align-items: center;
  transition: color 250ms;
  &:hover {
    color: #3378af;
  }
  @media screen and (min-width: 1199px) {
    display: none;
  }
`;

export const Logo = styled(NavLink)`
  display: none;
  @media screen and (min-width: 1199px) {
    color: white;
    font-size: 40px;
    font-weight: 300;
    padding: 5px;
    display: flex;
    text-align: center;
    align-items: center;
    transition: color 250ms;
    &:hover {
      color: #3378af;
    }
  }
`;

export const NavList = styled(NavLink)`
  color: white;
  margin-left: 5px;
  transition: all 250ms;
  padding: 5px;
  border-radius: 5px;

  &.active {
    color: white;
    background-color: #3378af;
  }
  &:hover:not(.active) {
    color: #3378af;
  }
  @media screen and (min-width: 1200px) {
    font-size: 30px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
`;

export const NavBox = styled.div`
  /* margin-left: 200px; */
`;
