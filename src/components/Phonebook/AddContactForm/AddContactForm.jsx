import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Input, ContactForm, Label, Button } from './AddContactFormStyle';

const NAME_PATTERN =
  "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
const NAME_PATTERN_TITTLE =
  "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan.";
const PHONENUMBER_PATTERN_TITTLE =
  'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +';

export const AddContactForm = ({ onAddContactBtn }) => {
  const phoneNumberId = nanoid();
  const nameId = nanoid();

  const onSubmit = (value, { resetForm }) => {
    const objectId = nanoid();
    onAddContactBtn(Object.assign(value, { id: objectId }));
    resetForm();
  };

  return (
    <Formik initialValues={{ name: '', phoneNumber: '' }} onSubmit={onSubmit}>
      <ContactForm>
        <Label htmlFor={nameId}>Name</Label>
        <Input
          type="text"
          id={nameId}
          pattern={NAME_PATTERN}
          title={NAME_PATTERN_TITTLE}
          name="name"
          required
        ></Input>
        <Label htmlFor={phoneNumberId}>Phone number</Label>
        <Input
          type="tel"
          id={phoneNumberId}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title={PHONENUMBER_PATTERN_TITTLE}
          name="phoneNumber"
          required
        ></Input>
        <Button type="submit">Add contact</Button>
      </ContactForm>
    </Formik>
  );
};

AddContactForm.propTypes = {
  onAddContactBtn: PropTypes.func.isRequired,
};
