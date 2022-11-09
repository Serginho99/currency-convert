import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavAuthSignUp = styled(NavLink)`
  color: white;
  font-size: 30px;
  transition: all 250ms;
  padding: 10px;
  border-radius: 5px;

  &.active {
    color: white;
    background-color: #3378af;
  }
  &:hover:not(.active) {
    color: #3378af;
  }
`;

export const NavAuthSignIn = styled(NavLink)`
  color: white;
  font-size: 30px;
  transition: all 250ms;
  padding: 10px;
  border-radius: 5px;
  margin-left: 22px;

  &.active {
    color: white;
    background-color: #3378af;
  }
  &:hover:not(.active) {
    color: #3378af;
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
    background-color: #1a237e;
  }
`;
