import React, { Component } from 'react'
import { nanoid } from 'nanoid';
import { StyledInput, StyledButton } from './Form.styled';


class Form extends Component {
    state = {
      name: '',
      number: '',
    }

    nameInputId = nanoid();
    telInputId = nanoid();
  

    handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
    };
    
    handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
    };

    reset = () => {
    this.setState({ name: '', number: '' });
    };

    
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>Name
          <StyledInput
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              id={this.nameInputId}
            />
          </label>
          <label htmlFor={this.telInputId}>Number
          <StyledInput
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={this.telInputId} />
          </label>
          <StyledButton type='submit'>Add contact</StyledButton>
        </form>
    )
  }
}

export default Form;