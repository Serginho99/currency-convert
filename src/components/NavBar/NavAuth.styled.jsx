import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavAuthSignUp = styled(NavLink)`
  color: white;
  font-size: 30px;
  transition: all 250ms;
  /* padding: 10px; */
  border-radius: 5px;
  /* position: relative; */

  &.active {
    color: white;
    background-color: #5e5eef;
  }
  &:hover:not(.active) {
    color: #9696e9;
  }
`;

export const NavAuthSignIn = styled(NavLink)`
  color: white;
  font-size: 30px;
  transition: all 250ms;
  /* padding: 10px; */
  border-radius: 5px;
  margin-left: 22px;

  &.active {
    color: white;
    background-color: #5e5eef;
  }
  &:hover:not(.active) {
    color: #9696e9;
  }
`;

export const Box = styled.div`
  position: relative;
  /* display: flex; */
  &::after {
    content: '';
    position: absolute;
    width: 2px;
    height: 90%;
    top: 50%;
    left: 52%;
    transform: translate(-50%, -50%);
    background-color: black;
  }
`;
