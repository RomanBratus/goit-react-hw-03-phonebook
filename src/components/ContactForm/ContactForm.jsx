import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.clearForm();
  };
  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
      id: nanoid(),
    });
  };
  clearForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    const { name, number } = this.state;
    return (
      <form
        style={{
          maxWidth: '250px',
          fontSize: 30,
        }}
        onSubmit={this.handleSubmit}
      >
        <label>
          Name
          <input
            style={{
              height: '34px',
              background: '#ccd6e3',
              borderRadius: '6px',
            }}
            type="text"
            onChange={this.handleChange}
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label>
          Number

          <input
            style={{
              height: '34px',
              background: '#ccd6e3',
              borderRadius: '6px',
            }}
            type="tel"
            onChange={this.handleChange}
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button
          style={{
            boxSizing: 'border-box',
            width: '100px',
            height: '34px',
            background: '#808e9e',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '6px',
            marginTop: '20px',
          }}
          type="submit"
        >
          Add contact
        </button>
      </form>
    );
  }
}
ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
export default ContactForm;
