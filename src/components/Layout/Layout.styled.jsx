import styled from 'styled-components';

export const Header = styled.header`
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #42a5f5;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,
    rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
`;

export const Main = styled.main`
  /* background-color: red; */
  /* display: flex; */
`;

export const Wrapper = styled.section`
  display: flex;
  position: relative;
  gap: 24px;
  padding-bottom: 40px;
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
    width: 1px;
    background-color: #757575;
  }
`;
