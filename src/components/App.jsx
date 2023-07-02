import React from 'react';
import Section from './Section/Section';
import ContactForm from './Contact-form/Contact-form';
import Filter from './FIlter/Filter';
import ContactsList from './Contact-list/Contact-list';
import Notification from './Notification/Notification';
const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
export class App extends React.Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };
  onContactAdding = contactData => {
    if (
      this.state.contacts.find(contact => contact.name === contactData.name)
    ) {
      alert(`${contactData.name} is already in contacts`);
      return;
    }
    this.setState({ contacts: [...this.state.contacts, contactData] });
  };

  onContactRemoving = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };
  onFilterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  render() {
    const filteredContacts = this.getFilteredContacts();
    return (
      <div className="App">
        <Section title="Phonebook">
          <ContactForm onContactAdding={this.onContactAdding}></ContactForm>
        </Section>
        <Section title="Contacts">
          <Filter
            value={this.state.filter}
            onFilterChange={this.onFilterChange}
          ></Filter>
          {this.state.contacts.length > 0 ? (
            <ContactsList
              contactsData={filteredContacts}
              onContactRemoving={this.onContactRemoving}
            ></ContactsList>
          ) : (
            <Notification title="There is no contacts"></Notification>
          )}
        </Section>
      </div>
    );
  }
}
