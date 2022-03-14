// == Import : npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import axios from 'axios';
import { userInputChange } from 'src/actions';
import { useDispatch } from 'react-redux';

// == Composant
const Field = ({
  value, onChange, name, type, placeholder,
}) => {
  const dispatch = useDispatch();
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  return (

    <>

      <input
        className="profil-modal__form"
        name={name}
        value={value}
        onChange={handleChange}
        type={type}
        placeholder={placeholder}
      />
    </>

  );
};
// == Export
export default Field;
