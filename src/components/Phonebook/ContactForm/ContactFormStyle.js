import { Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const FormWindow = styled(Form)`
  width: 300px;
  padding: 10px;
  overflow: auto;
  border: 2px solid black;
  margin-bottom: 30px;
`;

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 40px;
`;

export const Error = styled(ErrorMessage)`
  position: absolute;
  top: 24px;
  color: red;
  font-size: 10px;
`;

export const Label = styled.label`
  display: block;
  font-size: 24px;
  margin-bottom: 8px;
  font-weight: 500;
`;

export const Input = styled(Field)`
  outline: none;
  border: 1px solid gray;
  display: block;
  :focus-within {
    border-color: blue;
    box-shadow: rgba(3, 102, 214, 0.5) 0px 0px 0px 3px;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: 1px solid black;
  border-radius: 7px;
  padding: 5px;
  transition: transform 150ms ease;

  :active {
    background-color: blue;
    transform: scale(0.97);
  }
`;
