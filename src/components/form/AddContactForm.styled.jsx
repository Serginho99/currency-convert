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
