import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import {
  Input,
  ContactForm,
  Label,
  Button,
  Error,
  InputWrapper,
} from './AddContactFormStyle';
import { object, string } from 'yup';

const PHONE_NUMBER_PATTERN =
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
const NAME_PATTERN =
  "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
const NAME_PATTERN_TITTLE =
  "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan.";
const PHONE_NUMBER_PATTERN_TITTLE =
  'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +';
const NAME_PATTERN_TEXT = 'Name is a required field';
const PHONE_NUMBER_PATTERN_TEXT = 'Phone number is a required field';

const schema = object({
    name: string()
      .matches(NAME_PATTERN, NAME_PATTERN_TITTLE)
      .required(NAME_PATTERN_TEXT),
    phoneNumber: string()
      .matches(PHONE_NUMBER_PATTERN, PHONE_NUMBER_PATTERN_TITTLE)
      .required(PHONE_NUMBER_PATTERN_TEXT),
  });

export const AddContactForm = ({ onAddContactBtn }) => {
  const phoneNumberId = nanoid();
  const nameId = nanoid();

  const onSubmit = (value, { resetForm }) => {
    const objectId = nanoid();
    onAddContactBtn(Object.assign(value, { id: objectId }));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', phoneNumber: '' }}
      onSubmit={onSubmit}
      validationSchema={schema}
    >
      <ContactForm>
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
      </ContactForm>
    </Formik>
  );
};

AddContactForm.propTypes = {
  onAddContactBtn: PropTypes.func.isRequired,
};
