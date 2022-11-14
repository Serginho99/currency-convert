import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBlenderPhone } from 'react-icons/fa';

export const Wrapper = styled.div`
  margin-top: 20px;
  text-align: center;
`;

export const TitleHomePage = styled.h1`
  margin-bottom: 40px;
  @media screen and (min-width: 1200px) {
    font-size: 50px;
  }
`;

export const HomeLink = styled(Link)`
  color: #42a5f5;
  transition: color 250ms;
  &:hover {
    color: #3378af;
  }
`;

export const Svg = styled(FaBlenderPhone)`
  height: 120px;
  width: 120px;
  @media screen and (min-width: 1200px) {
    height: 350px;
    width: 350px;
  }
`;
