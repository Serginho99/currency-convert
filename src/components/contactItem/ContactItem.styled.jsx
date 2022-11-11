import styled from 'styled-components';
import { RiDeleteBinLine } from 'react-icons/ri';
import { FaUserEdit } from 'react-icons/fa';

export const Item = styled.li`
  display: flex;
  text-align: center;
  padding-bottom: 10px;
  align-items: center;
  border-bottom: 1px solid rgba(33, 33, 33, 0.2);
  & + & {
    margin-top: 20px;
  }
`;

export const Text = styled.p`
  margin: 0;
  color: #757575;
  font-size: 22px;
  margin-left: 30px;
`;

export const BtnDelete = styled.button`
  background-color: transparent;
  border: none;
`;

export const EditSvg = styled(FaUserEdit)`
  background-color: transparent;
  border: none;
  height: 30px;
  font-size: 25px;
  cursor: pointer;
  text-align: center;
  color: #757575;
  transition: transform 250ms;

  :hover {
    color: black;
    transform: scale(1.3);
  }
`;

export const DeleteSvg = styled(RiDeleteBinLine)`
  background-color: transparent;
  border: none;
  height: 30px;
  font-size: 25px;
  cursor: pointer;
  text-align: center;
  color: #757575;
  transition: transform 250ms;

  :hover {
    color: black;
    transform: scale(1.3);
  }
`;

export const Box = styled.div`
  display: flex;
  height: 40px;
  margin-left: auto;
`;
