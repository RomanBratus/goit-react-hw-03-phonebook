import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

// Input form
class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    errors: {},
  };

  validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        'Invalid name'
      )
      .required('Name is required'),
    number: Yup.string()
      .matches(
        /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
        'Invalid phone number'
      )
      .required('Phone number is required'),
  });

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;

    this.validationSchema
      .validate({ name, number }, { abortEarly: false })
      .then(() => {
        this.props.onSubmit({ id: nanoid(), name, number });
        this.clearForm();
        console.log(this.state);
      })
      .catch(error => {
        this.setState({ errors: { uncaught: error.message } });
      });
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
    console.log(value);
  };

  clearForm = () => {
    this.setState({
      name: '',
      number: '',
      errors: {},
    });
  };

  render() {
    const { name, number, errors } = this.state;
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
            required
          />
          {errors.name && <p>{errors.name}</p>}
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
            required
          />
          {errors.number && <p>{errors.number}</p>}
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
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
