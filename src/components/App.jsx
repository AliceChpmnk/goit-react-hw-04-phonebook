import { GlobalStyle } from 'components/GlobalStyle';
import React, { Component } from 'react';
import Form from './Form/Form';
import { nanoid } from 'nanoid';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { StyledForm } from './Form/Form.styled';

const testContacts = [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },]

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({contacts: parsedContacts});
    }

    console.log(`Contacts to test: `);
    console.log(testContacts);
  }

  componentDidUpdate(_, prevState) {
    const prevcontacts = prevState.contacts;
    const nextContacts = this.state.contacts;
    if(prevcontacts !== nextContacts) {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }
  }

  isInContacts = (name) => {
    return this.state.contacts.some(contact => contact.name === name);
  }

  addContact = (contact) => {
    if (this.isInContacts(contact.name)) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    contact.id = nanoid();
    this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
  };

  deleteContact = (e) => {
    const contactId = e.target.dataset.id;
    this.setState(prevState => ({contacts: prevState.contacts.filter(contact => contact.id !== contactId)}))
  }

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();

    return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizedFilter));
  };

  render() {
    return (
      <div>
        <StyledForm>
        <h1>Phonebook</h1>
          <Form onSubmit={this.addContact} />
        </StyledForm>
        <h1>Contacts</h1>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <Contacts contacts={this.getVisibleContacts()} onDeleteContact={ this.deleteContact } />
      <GlobalStyle />
    </div>
    )
  }
}

export default App;