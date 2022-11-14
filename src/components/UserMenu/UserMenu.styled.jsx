import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

export const Text = styled.p`
  font-size: 10px;
  margin-right: 10px;
  @media screen and (min-width: 1200px) {
    font-size: 20px;
  }
`;
