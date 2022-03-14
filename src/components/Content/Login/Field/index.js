// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

// == Composant
const Field = ({ value, onChange, name, placeholder }) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };
  return (
    <>
      <input
        className="login__input"
        name={name}
        value={value}
        onChange={handleChange}
        type={name}
        placeholder={placeholder}
      />
    </>
  );
};
// == Export
export default Field;
