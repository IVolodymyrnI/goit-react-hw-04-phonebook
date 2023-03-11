import { Component } from 'react';
import InitialContacts from 'components/data/contacts';
import { AddContactForm } from 'components/Phonebook/AddContactForm/AddContactForm';
import { PhoneNumberList } from 'components/Phonebook/PhoneNumberList/PhoneNumberList';
import { FilterByName } from 'components/Phonebook/FilterByName/FilterByName';
import { Title, SubTitle, AppStyle } from './AppStyle';

export class App extends Component {
  state = {
    contacts: InitialContacts,
    filter: '',
  };

  onAddContactBtn = value => {
    const isContactExist = this.checkOnUniqueName(value);

    isContactExist
      ? this.setContactToState(value)
      : alert(`${value.name} is already in contacts.`);
  };

  onFilterName = value => {
    this.setState({ filter: value });
  };

  onDeleteBtn = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  setContactToState = value => {
    this.setState(prevState => ({
      contacts: [value, ...prevState.contacts],
    }));
  };

  checkOnUniqueName = value => {
    const { contacts } = this.state;
    const arrayOfNames = contacts.map(contact => contact.name);
    const index = arrayOfNames.indexOf(value.name);

    return index === -1;
  };

  render() {
    const { contacts, filter } = this.state;
    const normaliziedName = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normaliziedName)
    );
    return (
      <AppStyle>
        <Title>PhoneBook</Title>
        <AddContactForm onAddContactBtn={this.onAddContactBtn} />
        <SubTitle>Contacts</SubTitle>
        <FilterByName onFilterName={this.onFilterName} value={filter} />
        <PhoneNumberList
          contacts={filteredContacts}
          onDeleteBtn={this.onDeleteBtn}
        />
      </AppStyle>
    );
  }
}
