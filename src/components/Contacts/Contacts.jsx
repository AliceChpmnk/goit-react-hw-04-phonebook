import React from 'react';
import { StyledContacts } from './Contacts.styled';

function Contacts({contacts, onDeleteContact}) {
  return (
        <StyledContacts>
        {contacts.map(({ name, number, id }) => (
            <li key={id}>{name}: {number}
                <button onClick={onDeleteContact} data-id={id}>Delete</button>
            </li>
        ))}
        </StyledContacts>
  )
}

export default Contacts;