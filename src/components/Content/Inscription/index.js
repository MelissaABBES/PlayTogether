import './style.scss';
import { useSelector, useDispatch } from 'react-redux';
import { changeInputValue } from 'src/actions/index';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';

const Inscription = ({ handleCreateUser }) => {
  const {
    email, password, password2, birthdate, pseudo, nationality,
  } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // const pass = document.getElementById('password').value;
  // const rpass = document.getElementById('rpassword').value;
  const [isRegister, setIsRegister] = useState(false);

  const handleChangeField = (e) => {
    // dispatch(changeField(value, name));
    const action = changeInputValue(e.target.value, e.target.name);
    console.log(action);
    dispatch(action);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("j'ai cliqué");
    if (password !== password2) {
      alert('Erreur sur le mot de passe');
    }
    handleCreateUser();
    setIsRegister(true);
  };

  if (isRegister) {
    return (
      <Navigate
        to="/login"
      />
    );
  }

  return (
    <div className="inscription">
      <h1>Création de compte</h1>
      <p className="intro">T'inscrire te permet de voir les joueurs connectés et inscrits aux jeux. Alors lance toi et rejoins un joueur ou une communauté!
      </p>
      <form className="form__inscription" onSubmit={handleSubmit}>
        <input
          className="form__email"
          type="email"
          placeholder="Adresse mail"
          name="email"
          onChange={handleChangeField}
          value={email}
        />
        <input
          className="form__password"
          type="password"
          id="password"
          placeholder="Mot de passe"
          name="password"
          onChange={handleChangeField}
          value={password}
        />
        <input
          className="form__password"
          type="password"
          id="rpassword"
          placeholder="Confirmation mot de passe"
          name="password2"
          onChange={handleChangeField}
          value={password2}
        />
        <input
          className="form__pseudo"
          type="text"
          placeholder="Pseudo"
          name="pseudo"
          onChange={handleChangeField}
          value={pseudo}
        />
        <input
          className="form__pseudo"
          type="text"
          placeholder="Nationalité"
          name="nationality"
          onChange={handleChangeField}
          value={nationality}
        />
        <input
          className="form__naissance"
          type="date"
          placeholder="Date de naissance"
          name="birthdate"
          onChange={handleChangeField}
          value={birthdate}
        />

        <button className="inscrire" type="submit">S'inscrire</button>

      </form>

    </div>

  );
};

// == Export
export default Inscription;
