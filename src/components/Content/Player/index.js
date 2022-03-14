import { Link } from 'react-router-dom';
import './style.scss';
import { useSelector } from 'react-redux';
import FavoritePlayer from './FavoritePlayer';
import PlayerByGame from './PlayerByGame';
import Loader from '../Loader';

const Player = () => {
  const usersByGame = useSelector((state) => state.usersByGame);
  const favoritesPlayers = useSelector((state) => state.user.favoritesPlayers);
  const InfoPlayers = useSelector((state) => state.user.favoritesPlayers);
  const findPlayer = favoritesPlayers.map((player) => player.id);
  const findPlayerByGame = usersByGame.map((player) => player.id);

  let findPlayer1 = [];
  let duplicates = [];
  let tempArray = [];
  for (let i = 0; i < findPlayerByGame.length; i++) {
    if (findPlayer.id === findPlayerByGame.id) {
      findPlayer1 = [...findPlayer, ...findPlayerByGame];
      duplicates = [];
      tempArray = [...findPlayer1].sort();
      for (let j = 0; j < tempArray.length; j++) {
        if (tempArray[j + 1] === tempArray[j]) {
          duplicates.push(tempArray[j]);
          const dbl = duplicates;
        }
      }
      for (let v = 0; v < duplicates.length; v++) {
        for (let w = 0; w < findPlayerByGame.length; w++) {
          if (findPlayerByGame.indexOf(duplicates[v]) !== -1) {
            findPlayerByGame.splice(findPlayerByGame.indexOf(duplicates[v]), 1);
          }
        }
      }
      if (duplicates === null) {
        return (
          findPlayerByGame.map((player) => (
            <Link to={`/games/player/${player}`}><PlayerByGame InfoPlayers={player} /></Link>
          ))
        );
      }
      return (
        <>
          {duplicates.map((player) => (
            <Link to={`/player/${player}`}><FavoritePlayer InfoPlayersFav={player} InfoPlayers={InfoPlayers} /></Link>
          ))}
          {findPlayerByGame.map((player) => (
            <Link to={`/games/player/${player}`}><PlayerByGame InfoPlayers={player} /></Link>
          ))}
        </>
      );
    }
  }

  return (
    <Loader />
  );
};

export default Player;
