import userLogo from 'src/assets/img/user.png';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateinfoUser, userInputChange,
} from 'src/actions';
import moment from 'moment';
import ProfilModal from '../ProfilModal';

const Settings = ({
  handleModal,
  email,
  pseudo,
  password,
  birthdate,
  profile_picture,
}) => {
  const modal = () => {
    const buttonValidate = document.querySelector('.view');
    buttonValidate.classList.remove('view__modal');
    buttonValidate.classList.remove('hideView');
  };
  const showModal = (evt) => {
    evt.preventDefault();
    handleModal();
    modal();
  };
  const { logged } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const birthdateString = moment(birthdate).format('DD/MM/YYYY');
  console.log(birthdateString);

  return (
    <div className="account__setting">
      <div className="account__setting--header">
        <img src={profile_picture} alt="Profil" />
        <p>{pseudo}</p>
      </div>
      <div className="account__setting--content">
        <div className="account__setting__pseudo">
          <i className="fas fa-user" />
          <p>{pseudo}</p>
        </div>
        <div className="account__setting__email">
          <i className="fas fa-at" />
          <p>{email}</p>
        </div>
        <div className="account__setting__mdp">
          <i className="fas fa-lock" />
          <p>*************</p>
        </div>
        <div className="account__setting__birth">
          <i className="fas fa-calendar-day" />
          <p>{birthdateString}</p>
        </div>
      </div>
      <div className="account__setting--edit">
        <button id="validate" type="submit" className="validate" onClick={showModal}>Editer le profil</button>
      </div>
      <div className="view__modal view">
        <ProfilModal
          email={email}
          password={password}
          pseudo={pseudo}
          profile={profile_picture}
          isLogged={logged}
          handleUpdateInfo={() => {
            const UpdateInfoAction = updateinfoUser();
            dispatch(UpdateInfoAction);
          }}
          changeField={(text, inputName) => {
            console.log('ca change quand je tape');
            const updateInputAction = userInputChange({
              [inputName]: text,
            });
            dispatch(updateInputAction);
          }}
        />
      </div>
    </div>
  );
};

export default Settings;
