import { Form, Field } from 'formik';
import styled from 'styled-components';

export const ContactForm = styled(Form)`
  width: 300px;
  padding: 10px;
  overflow: auto;
  border: 2px solid black;
  margin-bottom: 30px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 12px;
  font-size: 24px;
  font-weight: 500;
`;

export const Input = styled(Field)`
  outline: none;
  border: 1px solid gray;
  display: block;
  margin-bottom: 16px;
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
