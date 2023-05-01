import React from 'react';
import PropTypes from 'prop-types';

const Finder = ({ filter, onChange }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
      }}
    >
      <label>Find contact by name</label>
      <input
        style={{
          height: '34px',
          background: '#ccd6e3',
          borderRadius: '6px',
          marginLeft: '10px',
        }}
        type="text"
        value={filter}
        onChange={onChange}
      ></input>
    </div>
  );
};
Finder.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Finder;
