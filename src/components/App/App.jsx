import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import InitialContacts from 'components/data/contacts';
import { ContactForm } from 'components/Phonebook/ContactForm/ContactForm';
import { PhoneNumberList } from 'components/Phonebook/PhoneNumberList/PhoneNumberList';
import { FilterByName } from 'components/Phonebook/FilterByName/FilterByName';
import { Title, SubTitle, AppStyle } from './AppStyle';
import { load, save } from 'components/utils';

const LOCAL_CONTACTS = 'contacts';

const useLocalStorage = (key, defaultValue = null) => {
  const [state, setState] = useState(() => load(key) ?? defaultValue);

  useEffect(() => {
    save(key, state);
  }, [state, key]);

  return [state, setState];
};

export const App = () => {
  const [contacts, setContacts] = useLocalStorage(
    LOCAL_CONTACTS,
    InitialContacts
  );
  const [filter, setFilter] = useState('');

  const onAddContactBtn = value => {
    const isContactExist = checkOnUniqueName(value);
    const valueWithId = Object.assign(value, { id: nanoid() });

    isContactExist
      ? setContacts([valueWithId, ...contacts])
      : alert(`${value.name} is already in contacts.`);
  };

  const onDeleteBtn = id => {
    const cleanedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(cleanedContacts);
  };

  const checkOnUniqueName = value => {
    const arrayOfNames = contacts.map(contact => contact.name.toLowerCase());
    const index = arrayOfNames.indexOf(value.name.toLowerCase());

    return index === -1;
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <AppStyle>
      <Title>PhoneBook</Title>
      <ContactForm onAddContactBtn={onAddContactBtn} />
      <SubTitle>Contacts</SubTitle>
      <FilterByName
        onFilterName={value => setFilter(value.toLowerCase())}
        value={filter}
      />
      <PhoneNumberList contacts={filteredContacts} onDeleteBtn={onDeleteBtn} />
    </AppStyle>
  );
};
