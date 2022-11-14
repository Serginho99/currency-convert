import styled from 'styled-components';
import { RiDeleteBinLine } from 'react-icons/ri';
import { FaUserEdit } from 'react-icons/fa';

export const Item = styled.li`
  display: flex;
  text-align: center;
  align-items: center;
  border-bottom: 1px solid rgba(33, 33, 33, 0.2);
  & + & {
    margin-top: 20px;
  }
  @media screen and (min-width: 1200px) {
    padding-bottom: 10px;
  }
`;

export const Text = styled.p`
  margin-left: 10px;
  @media screen and (min-width: 1200px) {
    color: #757575;
    font-size: 22px;
  }
`;

export const BtnDelete = styled.button`
  background-color: transparent;
  border: none;
`;

export const EditSvg = styled(FaUserEdit)`
  background-color: transparent;
  border: none;
  height: 30px;
  width: 20px;
  cursor: pointer;
  text-align: center;
  color: #757575;
  transition: transform 250ms;

  :hover {
    color: black;
    transform: scale(1.3);
  }
  @media screen and (min-width: 1200px) {
    font-size: 25px;
  }
`;

export const DeleteSvg = styled(RiDeleteBinLine)`
  background-color: transparent;
  border: none;
  height: 30px;
  width: 20px;
  cursor: pointer;
  text-align: center;
  color: #757575;
  transition: transform 250ms;

  :hover {
    color: black;
    transform: scale(1.3);
  }
  @media screen and (min-width: 1200px) {
    font-size: 25px;
  }
`;

export const Box = styled.div`
  display: flex;
  height: 40px;
  margin-left: auto;
`;
