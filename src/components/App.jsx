// *
import React from 'react';
import Section from './Section/Section';
import ContactForm from './Contact-form/Contact-form';
import Filter from './FIlter/Filter';
import ContactsList from './Contact-list/Contact-list';
import Notification from './Notification/Notification';
// ? // Ключ сховища ;
const STORAGE_KEY = 'contacts';
// ? // Масив контактів який перевіряє наявність та отримує контакти із local storage ;
let loadedContactsArray = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
// ? // Кмпонент App ;
export class App extends React.Component {
  state = {
    contacts: loadedContactsArray,
    filter: '',
  };
  componentDidUpdate() {
    if (this.state.contacts !== loadedContactsArray) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state.contacts));
    }
    if (this.state.contacts.length === 0) {
      localStorage.removeItem(STORAGE_KEY);
    }
  }
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
            <Notification message="There is no contacts"></Notification>
          )}
        </Section>
      </div>
    );
  }
}
