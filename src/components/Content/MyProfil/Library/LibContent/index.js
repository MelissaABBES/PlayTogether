import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Game from '../../../GamesPage/GameCard';
import '../style.scss';

const LibContent = ({ isGamesVisible }) => {
  const games = useSelector((state) => state.user.favoritesGames);
  const classVisible = isGamesVisible ? 'games active-contenu' : 'games hide-contenu';
  return (
    <div id="GAMES" className={classVisible}>
      {games.map((game) => (
        <Link to={`/games/game/${game.id}`} key={game.id}><Game key={game.id} {...game} /></Link>
      ))}
    </div>
  );
};

export default LibContent;
