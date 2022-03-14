import './style.scss';
import PSN from 'src/assets/img/playstation.png';
import Xbox from 'src/assets/img/xbox.png';
import Nintendo from 'src/assets/img/nintendo-switch.png';
import EG from 'src/assets/img/epic-games.png';
import Steam from 'src/assets/img/steam.png';
import Origin from 'src/assets/img/origin.png';
import { useDispatch } from 'react-redux';
import { updateProfilInfoUser, userProfilInputChange } from '../../../../../actions';
import Btn from '../../Btn';
import MyProfilModal from '../../ProfilModal';

const InfosContent = ({
  handleModal,
  isInfosVisible,
  pseudo,
  nationality,
  profile_picture,
  presentation,
  gamertag_psn,
  gamertag_xbox,
  gamertag_nintendo,
  gamertag_eg,
  gamertag_steam,
  gamertag_origin,
}) => {
  const classVisible = isInfosVisible ? 'contenu active-contenu' : 'contenu hide-contenu';
  const dispatch = useDispatch();
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
  return (
    <>
      <div id="INFOS" className={classVisible}>
        <div className="profil__flex">
          <div className="profil__content--desc">
            <p>{presentation}</p>
          </div>
          <div className="profil__content--gameTags">
            <div className="gamerTag">
              <div className="gamerTag__img">
                <img src={PSN} alt="Logo PSN" />
              </div>
              <p>{gamertag_psn}</p>
            </div>
            <div className="gamerTag">
              <div className="gamerTag__img">
                <img src={Xbox} alt="Logo Xbox" />
              </div>
              <p>{gamertag_xbox}</p>
            </div>
            <div className="gamerTag">
              <div className="gamerTag__img">
                <img src={Nintendo} alt="Logo Nintendo" />
              </div>
              <p>{gamertag_nintendo}</p>
            </div>
            <div className="gamerTag">
              <div className="gamerTag__img">
                <img src={EG} alt="Logo Epic games" />
              </div>
              <p>{gamertag_eg}</p>
            </div>
            <div className="gamerTag">
              <div className="gamerTag__img">
                <img src={Steam} alt="Logo Steam" />
              </div>
              <p>{gamertag_steam}</p>
            </div>
            <div className="gamerTag">
              <div className="gamerTag__img">
                <img src={Origin} alt="Logo Origin" />
              </div>
              <p>{gamertag_origin}</p>
            </div>
          </div>
        </div>
        <div className="account__setting--edit">
          <Btn showModal={showModal} />
        </div>
      </div>
      <div className="view__modal view profil">
        <MyProfilModal
          pseudo={pseudo}
          nationality={nationality}
          presentation={presentation}
          gamertag_psn={gamertag_psn}
          gamertag_xbox={gamertag_xbox}
          gamertag_nintendo={gamertag_nintendo}
          gamertag_eg={gamertag_eg}
          gamertag_steam={gamertag_steam}
          gamertag_origin={gamertag_origin}
          picture={profile_picture}
          handleUpdateProfilInfo={() => {
            const UpdateProfilAction = updateProfilInfoUser();
            dispatch(UpdateProfilAction);
          }}
          changeField={(text, inputName) => {
            console.log('ca change quand je tape');
            const updateInputProfilAction = userProfilInputChange({
              [inputName]: text,
            });
            dispatch(updateInputProfilAction);
          }}
        />
      </div>
    </>
  );
};

export default InfosContent;
