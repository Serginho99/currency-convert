import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  margin-top: 40px;
  text-align: center;
`;

export const TitleHomePage = styled.h1`
  margin-bottom: 40px;
`;

export const HomeLink = styled(Link)`
  color: #42a5f5;
  transition: color 250ms;
  &:hover {
    color: #3378af;
  }
`;
