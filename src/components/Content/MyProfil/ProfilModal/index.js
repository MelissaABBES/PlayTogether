import './style.scss';
import userLogo from 'src/assets/img/user.png';
import Field from './Field';

// == Composant
const ProfilModal = ({
  handleUpdateProfilInfo,
  pseudo, nationality,
  changeField, picture,
  presentation, gamertag_psn,
  gamertag_xbox, gamertag_nintendo,
  gamertag_eg, gamertag_steam,
  gamertag_origin,
}) => {
  const modal = () => {
    const buttonValidate = document.querySelector('.view');
    buttonValidate.classList.add('hideView');
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleUpdateProfilInfo();
    modal();
  };
  const handleViewModal = (evt) => {
    evt.preventDefault();
    modal();
  };
  return (
    <div className="view">
      <div className="profil-modal">
        <div className="close">
          <button className="closeSettings" type="button" onClick={handleViewModal}><i className="fas fa-times" /></button>
        </div>

        <h1 className="profil-modal__title">Modifier son profil</h1>

        <p className="profil-modal__description">Vous pouvez ici, modifier vos informations personnelles</p>

        <form className="profil-modal__form" onSubmit={handleSubmit}>

          <div className="profil-modal__form__avatar">

            <img className="profil-modal__form__avatar--img" src={picture} alt="Photo de profil" />

            <Field htmlFor="file-upload" accept=".jpg, .png, .jpeg" onChange={changeField} name="profile_picture" type="file" />

          </div>
          <Field value={pseudo} onChange={changeField} name="pseudo" placeholder="pseudo" type="text" />
          <Field value={nationality} onChange={changeField} name="nationality" placeholder="Nationalité" type="text" />
          <Field value={presentation} onChange={changeField} name="presentation" placeholder="Présentation" type="text" />
          <Field value={gamertag_psn} onChange={changeField} name="gamertag_psn" placeholder="GamerTag PSN" type="text" />
          <Field value={gamertag_xbox} onChange={changeField} name="gamertag_xbox" placeholder="GamerTag Xbox" type="text" />
          <Field value={gamertag_nintendo} onChange={changeField} name="gamertag_nintendo" placeholder="GamerTag Nintendo" type="text" />
          <Field value={gamertag_eg} onChange={changeField} name="gamertag_eg" placeholder="GamerTag EG" type="text" />
          <Field value={gamertag_steam} onChange={changeField} name="gamertag_steam" placeholder="GamerTag Steam" type="text" />
          <Field value={gamertag_origin} onChange={changeField} name="gamertag_origin" placeholder="GamerTag Origin" type="text" />

          <button className="profil-modal__form--submit" type="submit">Valider</button>

        </form>

      </div>
    </div>
  );
};

// == Export
export default ProfilModal;
