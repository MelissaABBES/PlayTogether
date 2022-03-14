import { Link, Navigate } from 'react-router-dom';
import Field from '../Field';

// == Composant
const LogForm = ({
  email,
  password,
  changeField,
  handleLogin,
  isLogged,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };
  if (isLogged) {
    return (
      <Navigate
        to="/settings"
      />
    );
  }

  return (
    <div className="login">

      <h1 className="login__title">Se connecter</h1>

      <p className="login__sentence">Connecte toi pour trouver des joueurs avec qui jouer !</p>

      <form className="login__form-login" onSubmit={handleSubmit}>

        <div className="login__form-login__inputs">

          <Field value={email} onChange={changeField} name="email" placeholder="Adresse mail" />
          <Field value={password} onChange={changeField} name="password" placeholder="Mot de passe" />

        </div>

        <div className="login__form-login__btn-group">

          <button
            type="submit"
            className="login__form-login__btn-group--submit"
          >
            Se connecter
          </button>
          {/* <Link className="login__form-login__btn-group--link" to="/password">Mot de passe oublié</Link> */}

        </div>

      </form>

    </div>
  );
};

// == Export
export default LogForm;
