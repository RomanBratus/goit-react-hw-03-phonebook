import React from 'react';
import PropTypes from 'prop-types';

const ContactList = ({ children }) => {
  return (
    <ul
      style={{
        padding: '0',
      }}
    >
      {children}
    </ul>
  );
};

ContactList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContactList;
