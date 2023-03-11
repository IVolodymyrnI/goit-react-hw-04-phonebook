import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import {
  Input,
  FormWindow,
  Label,
  Button,
  Error,
  InputWrapper,
} from './ContactFormStyle';
import { schema } from './ContactFormValidation';

export const ContactForm = ({ onAddContactBtn }) => {
  const phoneNumberId = nanoid();
  const nameId = nanoid();

  const onSubmit = (value, { resetForm }) => {
    onAddContactBtn(value);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', phoneNumber: '' }}
      onSubmit={onSubmit}
      validationSchema={schema}
    >
      <FormWindow>
        <Label htmlFor={nameId}>Name</Label>
        <InputWrapper>
          <Error name="name" component="p" />
          <Input type="text" id={nameId} name="name"></Input>
        </InputWrapper>
        <Label htmlFor={phoneNumberId}>Phone number</Label>
        <InputWrapper>
          <Error name="phoneNumber" component="p" />
          <Input type="tel" id={phoneNumberId} name="phoneNumber"></Input>
        </InputWrapper>
        <Button type="submit">Add contact</Button>
      </FormWindow>
    </Formik>
  );
};

ContactForm.propTypes = {
  onAddContactBtn: PropTypes.func.isRequired,
};
