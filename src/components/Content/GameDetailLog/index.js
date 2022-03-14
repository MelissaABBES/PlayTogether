import './style.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import {
  addFavoritesGames, saveCurrentGameId, gameAlreadyInFavoritesSucces, fetchUsersByGame, fetchUsersByGameSucces, fetchUserGames, displayAddGameModale, userInputChange, updateGameInfos
} from 'src/actions';
import { useEffect, useState } from 'react';
import level from 'src/assets/img/level.png';
import tetris from 'src/assets/img/tetris.png';
import check from 'src/assets/img/check.png';
import platform from 'src/assets/img/platform.png';
import Player from '../Player';
import GameTag from './GameTag';
import RemoveGame from './RemoveGame';
import UserInfos from './UserInfos';
import AddGameModal from './AddGameModal';

// == Composant
const GameDetailLog = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 1023px)',
  });

  const isTabletOrDesktop = useMediaQuery({
    query: '(min-width: 1024px)',
    queryMax: '(max-width: 3840px)',
  });

  const dispatch = useDispatch();

  const favoritesGames = useSelector((state) => state.user.favoritesGames);
  const currentGameId = useSelector((state) => state.currentGameId);
  let gameAlreadyInFavorites = useSelector((state) => state.gameAlreadyInFavorites);
  const usersByGame = useSelector((state) => state.usersByGame);
  const favoritesPlayers = useSelector((state) => state.user.favoritesPlayers);

  // const filteredUsersByGame = usersByGame.filter((user) => user.game_id == currentGameId);

  // console.log(filteredUsersByGame);

  const displayModale = useSelector((state) => state.displayModale);

  const [filterPlatform, setFilterPlatform] = useState('');
  const [filterLevel, setFilterLevel] = useState('');
  const [filterGameplay, setFilterGameplay] = useState('');

  const usersByGameF = useSelector((state) => state.usersByGameF.filter((user) => {
    let isUserDisplayed = true;

    if (filterPlatform.length && !user.platform.includes(filterPlatform)) {
      isUserDisplayed = false;
    }
    if (filterLevel.length && !user.level.includes(filterLevel)) {
      isUserDisplayed = false;
    }
    if (filterGameplay.length && !user.gameplay.includes(filterGameplay)) {
      isUserDisplayed = false;
    }

    return isUserDisplayed;
  }));

  // const filteredUsersByGame = usersByGameF.filter((user) => user.game_id == currentGameId);

  const games = useSelector((state) => state.games);

  const selectedGame = favoritesGames.find((game) => game.game_id == currentGameId);
  console.log('favorites games', favoritesGames);

  if (favoritesGames.includes(selectedGame)) {
    gameAlreadyInFavorites = true;
  }

  const [infosVisible, setInfosVisible] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    dispatch(saveCurrentGameId(id));
    dispatch(fetchUsersByGame());
  }, []);

  const findGame = games.find((game) => id == game.id);
  const findPlayer = favoritesPlayers.find((player) => id == player.id);
  const findPlayerByGame = usersByGame.find((player) => id == player.id);
  


  return (
    <div className="game-detail">

      <div className="game-detail__infos">

        <div className="game-detail__infos__container">

          <div className="game-detail__infos__container__head">

            <h1 className="game-detail__infos__container__head--title">{findGame.name}</h1>
            {gameAlreadyInFavorites && <img className="game-detail__infos__container__head--check" src={check} alt="check" />}
            {!gameAlreadyInFavorites && (
            <button
              type="button"
              className="game-detail__infos__container__head--button"
              onClick={() => { const action = addFavoritesGames(); dispatch(action); dispatch(fetchUserGames()); dispatch(displayAddGameModale()); setInfosVisible(!infosVisible);
              }}
            >Ajouter
            </button>
            )}
            {gameAlreadyInFavorites && <RemoveGame />}

          </div>

          <div className="game-detail__infos__container__tags">

            <GameTag />
            <GameTag />
            <GameTag />

          </div>

        </div>

        <div className="game-detail__infos__desc">

          <p className="game-detail__infos__desc--text">{findGame.description}</p>

        </div>

      </div>

      <div className="game-detail__content">

      <form className="game-detail__content__filters">

<div className="game-detail__content__filters__gameImg">

  <img className="game-detail__content__filters__gameImg--img" src={findGame.cover} alt="Image du jeu" />

</div>

          <select className="game-detail__content__filters--platform" name="platforms" id="platform-select" value={filterPlatform} onChange={(e) => setFilterPlatform(e.target.value)}>

            <option value="">Plateforme</option>
            <option value="PC">PC</option>
            <option value="Xbox">Xbox</option>
            <option value="Playstation">Playstation</option>
            <option value="Switch">Switch</option>

</select>

          <select className="game-detail__content__filters--levels" name="levels" id="levels-select" value={filterLevel} onChange={(e) => setFilterLevel(e.target.value)}>

  <option value="">Niveau</option>
  <option value="JarJar Binks">JarJar Binks</option>
  <option value="Padawan">Padawan</option>
  <option value="Chevalier jedi">Chevalier jedi</option>
  <option value="Maître jedi">Maître jedi</option>
  <option value="Yoda">Yoda</option>

</select>

          <select className="game-detail__content__filters--style" name="style" id="style-select" value={filterGameplay} onChange={(e) => setFilterGameplay(e.target.value)}>

            <option value="">Style de jeu</option>
            <option value="Chill">Chill</option>
            <option value="Challenger">Challenger</option>
            <option value="Try Hard">Try hard</option>

</select>

</form>

        <p className="game-detail__content--title">Liste des joueurs pour titre du jeu</p>

        <div className="game-detail__content__users">

          <div className="player">

            {isMobile && <> <Player /> </>}

            {isTabletOrDesktop && <> <Player /></>}

            {/* {isMobile && <> {filteredUsersByGame.map((user) => (<Link to={`/player/${user.id}`}><Player key={user.id} {...user} /></Link>))} </>}

            {isTabletOrDesktop && <> {filteredUsersByGame.map((user) => (<Link to={`/player/${user.id}`}><Player key={user.id} {...user} /></Link>))} </>} */}

          </div>

        </div>

      </div>

      {infosVisible && <UserInfos />}
      {displayModale && (
      <AddGameModal
        {...favoritesGames}
        changeField={(text, inputName) => {
          console.log('ca change quand je tape');
          const updateInputAction = userInputChange({
            [inputName]: text,
          });
          dispatch(updateInputAction);
        }}
        handleUpdateInfos={() => {
          const UpdateGameInfosAction = addFavoritesGames();
          dispatch(UpdateGameInfosAction);
        }}
      />
      )}

    </div>
  );
};

// == Export
export default GameDetailLog;
