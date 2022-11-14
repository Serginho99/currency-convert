import styled from 'styled-components';

export const Btn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  background-color: transparent;
  outline: 0px;
  margin: 0px;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  font-size: 10px;
  text-transform: uppercase;
  min-width: 64px;
  padding: 7px;
  border-radius: 4px;
  font-weight: 500;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border: 1px solid white;
  color: white;
  @media screen and (min-width: 1200px) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    background-color: transparent;
    outline: 0px;
    margin: 0px;
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
    appearance: none;
    text-decoration: none;
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.75;
    text-transform: uppercase;
    min-width: 64px;
    padding: 5px 15px;
    border-radius: 4px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border: 1px solid white;
    color: white;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

export const Text = styled.p`
  font-size: 15px;
  font-weight: 500;
  margin-right: 10px;
  @media screen and (min-width: 1200px) {
    font-size: 20px;
  }
`;
