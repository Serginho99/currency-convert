import styled from 'styled-components';
import { Paper } from '@mui/material';

export const Wrapper = styled(Paper)`
  width: 500px;
  height: 400px;
  padding: 10px;
  /* display: flex; */
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

export const Text = styled.p`
  font-size: 30px;
  margin: 0;
`;

export const WrapperText = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;
`;
