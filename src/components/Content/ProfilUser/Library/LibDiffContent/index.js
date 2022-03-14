import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Game from '../../../GamesPage/GameCard';
import '../style.scss';
import Loader from '../../../Loader';

const LibDiffContent = ({ isOtherGamesVisible }) => {
  const games = useSelector((state) => state.user.favoritesGames);
  const otherGames = useSelector((state) => state.user.otherGames);
  const loadingDiffGame = useSelector((state) => state.user.loadingOGame);
  console.log('LibDiff', otherGames);
  const classVisible = isOtherGamesVisible ? 'games active-contenu' : 'games hide-contenu';
  if (!loadingDiffGame) {
    return (
      <Loader />
    );
  }
  if (otherGames >= 0) {
    return (
      <div id="GAMES" className={classVisible}>
        <p>Il n'y a pas de jeux !</p>
      </div>
    );
  }
  return (
    <div id="GAMES" className={classVisible}>
      {otherGames.map((game) => (
        <Link to={`/games/game/${game.game_id}`} key={game.game_id}><Game key={game.game_id} {...game} /></Link>
      ))}
    </div>
  );
};

export default LibDiffContent;
