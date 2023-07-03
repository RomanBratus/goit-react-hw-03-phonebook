import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import ContactItem from './ContactItem/ContactItem';
import Finder from './Finder/Finder';

const mainStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'left',
  fontSize: 20,
  color: '#3d2f26ed',
  marginLeft: '30px',
};
class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contactsLocal');
    const parsedContactsLocal = JSON.parse(contacts);
    if (parsedContactsLocal) {
      this.setState({ contacts: parsedContactsLocal });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem(
        'contactsLocal',
        JSON.stringify(this.state.contacts)
      );
    }
  }
  addContact = data => {
    const { contacts } = this.state;
    contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    )
      ? alert(`${data.name} is already in contacts`)
      : this.setState(prevState => ({
        contacts: [data, ...prevState.contacts],
      }));
  };
  getListContacts = () => {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };
  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContact = this.getListContacts();

    return (
      <div style={mainStyle}>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={this.addContact} />
        <h3>Contacts</h3>
        <Finder filter={filter} onChange={this.changeFilter} />
        <ContactList>
          <ContactItem
            contacts={visibleContact}
            deleteContactOn={this.deleteContact}
          />
        </ContactList>
      </div>
    );
  }
}

export default App;
