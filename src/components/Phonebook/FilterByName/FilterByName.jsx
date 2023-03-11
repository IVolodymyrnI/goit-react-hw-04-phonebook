import { Formik, Form } from 'formik';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import {
  Label,
  Input,
} from 'components/Phonebook/ContactForm/ContactFormStyle';

export function FilterByName({ onFilterName, value }) {
  const nameId = nanoid();

  const onChange = e => {
    const inputValue = e.currentTarget.value;
    onFilterName(inputValue);
	};
	
  return (
    <Formik initialValues={{ findName: '' }}>
      <Form>
        <Label htmlFor={nameId}>Find contacts by name</Label>
        <Input
          type="text"
          id={nameId}
          name="findName"
          value={value}
          onChange={onChange}
        ></Input>
      </Form>
    </Formik>
  );
}

FilterByName.propTypes = {
  onFilterName: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
