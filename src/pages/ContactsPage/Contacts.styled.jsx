import styled from 'styled-components';

export const Wrapper = styled.div`
  gap: 24px;
  height: 100%;
  @media screen and (min-width: 1200px) {
    display: flex;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (min-width: 1200px) {
    border-right: 2px solid #757575;
  }
`;
