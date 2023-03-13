import { GlobalStyle } from 'components/GlobalStyle';
import React, { useState, useEffect } from 'react';
import Form from './Form/Form';
import { nanoid } from 'nanoid';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { StyledForm } from './Form/Form.styled';

const testContacts = [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },]

function App() {
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) ?? []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    console.log(`Contacts to test: `);
    console.log(testContacts);
  }, []) 

  useEffect(()=> {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts])

  const isInContacts = (name) => {
    return contacts.some(contact => contact.name === name);
  }

  const addContact = (contact) => {
    if (isInContacts(contact.name)) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    contact.id = nanoid();
    setContacts(contacts => ([contact, ...contacts]));
  };

  const deleteContact = (e) => {
    const contactId = e.target.dataset.id;
    setContacts(contacts => (contacts.filter(contact => contact.id !== contactId)))
  }

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLocaleLowerCase();

    return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizedFilter));
  };

  return (
    <div>
        <StyledForm>
        <h1>Phonebook</h1>
          <Form onSubmit={addContact} />
        </StyledForm>
        <h1>Contacts</h1>
        <Filter value={filter} onChange={changeFilter} />
        <Contacts contacts={getVisibleContacts()} onDeleteContact={ deleteContact } />
      <GlobalStyle />
    </div>
  )
}

export default App;