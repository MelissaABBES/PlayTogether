import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import bckgrdUser from '../../../assets/img/bckgrdUser.jpg';
import {
  visibleInfo,
  visibleGame,
  fetchSimilarGame,
  saveCurrentPlayerId,
  fetchAllPlayerGame,
  visibleOtherGame,
  AddFavoritePlayer,
  RemoveFavoritePlayer,
  fetchUserPlayers,
} from '../../../actions';
import InfosHeader from './Infos/InfosHeader';
import LibHeaderSame from './Library/LibHeaderSame';
import LibHeaderDiff from './Library/LibHeaderDiff';
import InfosContentPlayer from './Infos/InfosContentPlayer';
import Library from './Library/index';
import Loader from '../Loader';
import AddUser from './AddUser';
import RemoveUser from './RemoveUser';

// == Composant
const ProfilUserByGame = () => {
  const { infosVisible, logged } = useSelector((state) => state);
  // const players = useSelector((state) => state.user.favoritesPlayers);
  const playerByGame = useSelector((state) => state.usersByGame);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    const action2 = saveCurrentPlayerId(id);
    dispatch(action2);
    const action = fetchSimilarGame();
    dispatch(action);
    const action3 = fetchAllPlayerGame();
    dispatch(action3);
  }, [logged]);

  // const findPlayer = players.find((player) => id == player.id);
  const findPlayerByGame = playerByGame.find((player) => id == player.id);

  if (findPlayerByGame == undefined) {
    console.log('Je ne trouve pas ID');
      <Loader />;
  }

  // const loadingSameGame = useSelector((state) => state.user.loadingSGame);
  // const loadingDiffGame = useSelector((state) => state.user.loadingOGame);
  // console.log('je load', loadingSameGame);
  // console.log('je load', loadingDiffGame);
  // const SameGames = useSelector((state) => state.user.similarGames);
  // console.log(SameGames);
  // const otherGames = useSelector((state) => state.user.otherGames);
  // console.log('profiluser', otherGames);

  // if (!loadingSameGame && !loadingDiffGame) {
  //   return (
  //     <Loader />
  //   );
  // }
  return (
    <>
      <div className="bgUser"><img src={bckgrdUser} alt="Background USer" /></div>
      <div className="profil">
        <div className="profil__header">
          <img src={findPlayerByGame.profile_picture} alt="Profil" />
          <p>{findPlayerByGame.pseudo}</p>
          <p className="profil__header--age">{findPlayerByGame.age} ans - {findPlayerByGame.nationality}</p>
          <AddUser
            hanbleAddUser={() => {
              console.log('ajoute un user');
              const action = AddFavoritePlayer();
              dispatch(action);
              dispatch(fetchUserPlayers());
            }}
          />
          <RemoveUser
            hanbleRemoveUser={() => {
              console.log('retire un user');
              const action = RemoveFavoritePlayer();
              dispatch(action);
              dispatch(fetchUserPlayers());
            }}
          />
        </div>

        <div className="container-onglets">
          <div className="profil__nav">
            <InfosHeader
              handleVisibility={() => {
                const isVisible = visibleInfo();
                dispatch(isVisible);
              }}
            />
            <LibHeaderSame handleVisibility={() => {
              const isVisible = visibleGame();
              dispatch(isVisible);
            }}
            />
            <LibHeaderDiff handleVisibility={() => {
              const isVisible = visibleOtherGame();
              dispatch(isVisible);
            }}
            />
          </div>

          <div className="profil__content">
            <InfosContentPlayer isInfosVisible={infosVisible} player={findPlayerByGame} />
            {/* <Library player={findPlayerByGame} /> */}
          </div>

        </div>
      </div>
    </>
  );
};

// == Export
export default ProfilUserByGame;
