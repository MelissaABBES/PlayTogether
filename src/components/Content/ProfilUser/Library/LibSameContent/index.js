import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Game from '../../../GamesPage/GameCard';
import '../style.scss';

const LibSameContent = ({ isGamesVisible }) => {
  const games = useSelector((state) => state.user.similarGames);
  const classVisible = isGamesVisible ? 'games active-contenu' : 'games hide-contenu';
  if (games >= 0) {
    return (
      <div id="GAMES" className={classVisible}>
        <p>Vous n'avez pas de jeux en communs !</p>
      </div>
    );
  }
  return (
    <div id="GAMES" className={classVisible}>
      {games.map((game) => (
        <Link to={`/games/game/${game.game_id}`} key={game.game_id}><Game key={game.game_id} {...game} /></Link>
      ))}
    </div>
  );
};

export default LibSameContent;
