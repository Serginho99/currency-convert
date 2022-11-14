import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavAuthSignUp = styled(NavLink)`
  color: white;
  font-size: 15px;
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
    padding: 10px;
  }
`;

export const NavAuthSignIn = styled(NavLink)`
  color: white;
  font-size: 15px;
  transition: all 250ms;
  padding: 5px;
  border-radius: 5px;
  margin-left: 22px;

  &.active {
    color: white;
    background-color: #3378af;
  }
  &:hover:not(.active) {
    color: #3378af;
  }
  @media screen and (min-width: 1200px) {
    font-size: 30px;
    padding: 10px;
  }
`;

export const Box = styled.div`
  position: relative;
  display: flex;
  margin-left: 20px;
  &::after {
    content: '';
    position: absolute;
    width: 2px;
    height: 70%;
    top: 50%;
    left: 52%;
    transform: translate(-50%, -50%);
    background-color: #1a237e;
  }
`;
