import './style.scss';
import Field from './Field';
import { userInputChange } from 'src/actions';

// == Composant
const AddGameModale = ({ gameplay, platform, level, changeField, handleUpdateInfos }) => {
  
  const modal = () => {
    const buttonValidate = document.querySelector('.view');
    buttonValidate.classList.add('hideView');
  };
  const handleViewModal = (evt) => {
    evt.preventDefault();
    modal();
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleUpdateInfos();
    modal();
  };

  return (
    <div className="view">
      <div className="profil-modal">
        <div className="close">
          <button className="closeSettings" type="button" onClick={handleViewModal}><i className="fas fa-times" /></button>
        </div>

        <h1 className="profil-modal__title">Infos joueur</h1>

        <p className="profil-modal__description">Vous pouvez ici, définir votre style de jeu, votre niveau et votre plateforme</p>

        <form className="profil-modal__form" action="/settings" onSubmit={handleSubmit}>

          <Field value={gameplay} onChange={changeField} name="gameplay" type="gameplay" placeholder />
          <Field value={level} onChange={changeField} name="level" type="level" />
          <Field value={platform} onChange={changeField} name="platform" type="platform" />

          <button className="profil-modal__form--submit" type="submit" value="Envoyer">Valider</button>

        </form>

      </div>
    </div>
  );
};

// == Export
export default AddGameModale;
