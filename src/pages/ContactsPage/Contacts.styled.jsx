import styled from 'styled-components';
import defaultImg from '../../../src/img/fon-for-body.png';
export const Wrapper = styled.div`
  /* display: flex; */
  gap: 24px;
  height: 100%;
`;

export const Main = styled.main`
  flex-grow: 1;
  display: flex;
  background-image: url(${defaultImg});
  background-size: cover;
  background-repeat: no-repeat;
`;
