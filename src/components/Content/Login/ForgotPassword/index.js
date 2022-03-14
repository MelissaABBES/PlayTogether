/* eslint-disable max-len */
import './style.scss';

// == Composant
const ForgotPassword = () => (
  <div className="forgot__password">
    <h1>Tu as oublié ton mot de passe ?</h1>
    <h2>Pas de panique !</h2>
    <p>Reset-le en renseignant ton adresse mail juste en dessous <br/>et restart depuis ta dernière sauvegarde !</p>
    <form action="" method="">
      <input placeholder="Email" />
      <button type="submit">Envoyer</button>
    </form>
  </div>
);

// == Export
export default ForgotPassword;
