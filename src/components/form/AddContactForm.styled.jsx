import styled from 'styled-components';

export const FormWrapper = styled.form`
  @media screen and (min-width: 1200px) {
    position: relative;
    display: block;
    text-align: center;
    border: 1px solid rgb(21, 101, 192);
    margin-left: auto;
    margin-right: auto;
    border-radius: 7px;
    padding: 20px;
  }
`;

export const FormLabel = styled.label`
  @media screen and (min-width: 1200px) {
    font-size: 20px;
    line-height: 1.16;
    letter-spacing: 0.01em;
    color: #757575;
    margin-bottom: 4px;
    margin-right: 10px;
  }
`;

export const FormInput = styled.input`
  @media screen and (min-width: 1200px) {
    border-radius: 4px;
    border: 1px solid rgba(33, 33, 33, 0.2);
    margin: 0 auto;
    height: 30px;
    padding-left: 10px;
    outline: none;
    cursor: pointer;
  }
`;

export const ButtonWrapper = styled.div`
  @media screen and (min-width: 1200px) {
    padding: 24px;
    text-align: center;
    width: 400px;
    position: sticky;
    top: 0;
  }
`;

export const Wrapper = styled.div`
  @media screen and (min-width: 1200px) {
    width: 450px;
  }
`;

export const Btn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  background-color: transparent;
  outline: 0;
  border: 0;
  margin: 0;
  border-radius: 0;
  padding: 0;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  text-decoration: none;
  color: inherit;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.75;
  text-transform: uppercase;
  width: 200px;
  padding: 6px 16px;
  border-radius: 4px;
  color: #fff;
  background-color: #1976d2;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  margin-top: 10px;
  color: #1565c0;
  background: transparent;
  border: 2px solid #1565c0;
  &:hover {
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
      0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  }
  @media screen and (min-width: 1200px) {
    width: 300px;
  }
`;
