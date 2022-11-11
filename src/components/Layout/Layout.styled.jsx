import styled from 'styled-components';
import defaultImg from '../../../src/img/fon-for-body.png';

export const Header = styled.header`
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #42a5f5;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,
    rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
`;

export const Main = styled.main`
  flex-grow: 1;
  display: flex;
  background-image: url(${defaultImg});
  background-size: cover;
  background-repeat: no-repeat;
`;
