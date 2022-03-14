import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import bckgrdUser from '../../../assets/img/bckgrdUser.jpg';
import {
  userProfilInputChange, updateProfilInfoUser, visibleInfo, visibleGame, visiblePlayer,
} from '../../../actions';
import InfosHeader from './Infos/InfosHeader';
import LibHeader from './Library/LibHeader';
import LibContent from './Library/LibContent';
import PlayerHeader from './Players/PlayerHeader';
import PlayerContent from './Players/PlayerContent';
import InfosContent from './Infos/InfosContent';
import MyProfilModal from './ProfilModal';

// == Composant
const MyProfil = ({ handleModal, userInfo }) => {
  const { infosVisible, gamesVisible, playersVisible } = useSelector((state) => state);
  const { settings } = useSelector((state) => state.user);
  const games = useSelector((state) => state.user.favoritesGames);
  const InfoPlayers = useSelector((state) => state.user.favoritesPlayers);
  console.log('jeux favoris reçus', games);

  const dispatch = useDispatch();

  
  return (
    <>
      <div className="bgUser">
        <img src={bckgrdUser} alt="Background USer" />
      </div>
      <div className="profil">
        <div className="profil__header">
          <img src={settings.profile_picture} alt="Profil" />
          <p>{settings.pseudo}</p>
          <p className="profil__header--age">{settings.age} ans - {settings.nationality}</p>
        </div>

        <div className="container-onglets">
          <div className="profil__nav">
            <InfosHeader
              handleVisibility={() => {
                const isVisible = visibleInfo();
                dispatch(isVisible);
              }}
            />
            <LibHeader handleVisibility={() => {
              const isVisible = visibleGame();
              dispatch(isVisible);
            }}
            />
            <PlayerHeader handleVisibility={() => {
              const isVisible = visiblePlayer();
              dispatch(isVisible);
            }}
            />
          </div>

          <div className="profil__content">
            <InfosContent isInfosVisible={infosVisible} {...settings} handleModal={handleModal} />
            <LibContent isGamesVisible={gamesVisible} />
            <PlayerContent isPlayersVisible={playersVisible} InfoPlayers={InfoPlayers} />
          </div>

        </div>
        
        {/* <div className="view__modal view">
          <MyProfilModal
            pseudo={settings.pseudo}
            nationality={settings.nationality}
            presentation={settings.presentation}
            gamertag_psn={settings.gamertag_psn}
            gamertag_xbox={settings.gamertag_xbox}
            gamertag_nintendo={settings.gamertag_nintendo}
            gamertag_eg={settings.gamertag_eg}
            gamertag_steam={settings.gamertag_steam}
            gamertag_origin={settings.gamertag_origin}
            picture={settings.profile_picture}
            isLogged={settings.logged}
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
        </div> */}
      </div>
    </>
  );
};

// == Export
export default MyProfil;
