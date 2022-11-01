import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  text-align: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(33, 33, 33, 0.2);
  & + & {
    margin-top: 20px;
  }
`;

export const Text = styled.p`
  margin: 0;
  color: #757575;
  font-size: 20px;
`;

export const BtnDelete = styled.button`
  background-color: transparent;
  border: none;
  height: 30px;
  font-size: 20px;
  cursor: pointer;
  text-align: center;
  color: #757575;
  transition: transform 250ms;

  :hover {
    color: black;
    transform: scale(1.3);
  }
`;
