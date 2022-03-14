// == Import : npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import axios from 'axios';
import { userInputChange } from 'src/actions';
import { useDispatch } from 'react-redux';

// == Composant
const Field = ({ value, onChange, name, type, placeholder }) => {
  const dispatch = useDispatch();
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };
  const [imageSelected, setImageSelected] = useState('');
  const uploadImage = () => {
    const formData = new FormData();
    formData.append('file', imageSelected);
    formData.append('upload_preset', 'preset1');
    axios.post('https://api.cloudinary.com/v1_1/playtogether/image/upload', formData)
      .then((res) => {
        console.log(res.data.secure_url);
        // setImageSelected(res.data.secure_url);
        const action = userInputChange({
          profile_picture: res.data.secure_url,
        });
        dispatch(action);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (type === 'file') {
    return (
      <>
        <input
          className="profil-modal__form"
          name={name}
          value={value}
          onChange={(evt) => {
            setImageSelected(evt.target.files[0]);
          }}
          type={type}
          placeholder={placeholder}
        />
        <button type="button" onClick={uploadImage}>Envoyer l'image</button>
      </>
    );
  }
  return (

    <>

      <input
        className="profil-modal__form"
        name={name}
        value={value}
        onChange={handleChange}
        type={type}
      />
    </>

  );
};
// == Export
export default Field;
