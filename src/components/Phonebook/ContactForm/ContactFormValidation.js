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

export const schema = object({
  name: string()
    .matches(NAME_PATTERN, NAME_PATTERN_TITTLE)
    .required(NAME_PATTERN_TEXT),
  phoneNumber: string()
    .matches(PHONE_NUMBER_PATTERN, PHONE_NUMBER_PATTERN_TITTLE)
    .required(PHONE_NUMBER_PATTERN_TEXT),
});
