import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { StyledInput, StyledButton } from './Form.styled';
import PropTypes from 'prop-types';

export function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const telInputId = nanoid();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default: throw Error('unknown name');
    }
  };
  
  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({name: name, number: number});

    reset();
    };

  const reset = () => {
    setName('');
    setNumber('');
    };

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor={nameInputId}>Name
          <StyledInput
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              id={nameInputId}
            />
          </label>
          <label htmlFor={telInputId}>Number
          <StyledInput
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={telInputId} />
          </label>
          <StyledButton type='submit'>Add contact</StyledButton>
        </form>
  )
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default Form;