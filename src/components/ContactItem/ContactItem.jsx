import React from 'react';
import PropTypes from 'prop-types';

const ContactItem = ({ contacts, deleteContactOn }) => {
  return contacts.map(({ name, number, id }) => (
    <li
      style={{
        display: 'flex',
        padding: '0',
        marginTop: '20px',
        justifyContent: 'left',
      }}
      key={id}
    >
      {name} : <span>{number}</span>
      <button
        style={{
          boxSizing: 'border-box',
          width: '100px',
          height: '30px',
          background: '#808e9e',
          border: 'none',
          cursor: 'pointer',
          borderRadius: '6px',
          marginLeft: '15px',
        }}
        type="button"
        onClick={() => {
          deleteContactOn(id);
        }}
      >
        Delete
      </button>
    </li>
  ));
};

ContactItem.propTypes = {

  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,

  onDeleteContact: PropTypes.func,
};

export default ContactItem;
