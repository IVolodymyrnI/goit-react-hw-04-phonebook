import PropTypes from 'prop-types';
import { Info, List, Item } from './PhoneNumberListStyle';
import { Button } from 'components/Phonebook/ContactForm/ContactFormStyle';

export function PhoneNumberList({ contacts, onDeleteBtn }) {
  return (
    <List>
      {contacts.map(({ id, name, phoneNumber }) => {
        return (
          <Item key={id}>
            <Info>
              {name}: {phoneNumber}
            </Info>
            <Button type="button" onClick={() => onDeleteBtn(id)}>
              delete
            </Button>
          </Item>
        );
      })}
    </List>
  );
}

PhoneNumberList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      phoneNumber: PropTypes.string.isRequired,
    })
  ),
  onDeleteBtn: PropTypes.func.isRequired,
};
