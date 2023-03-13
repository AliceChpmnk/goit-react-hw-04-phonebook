import React from 'react';
import { StyledContacts } from './Contacts.styled';
import PropTypes from 'prop-types';

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

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
}

export default Contacts;