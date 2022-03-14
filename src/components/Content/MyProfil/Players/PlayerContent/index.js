import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Player from '../../../Player';
import FavoritePlayer from '../../../Player/FavoritePlayer';

const PlayerContent = ({ isPlayersVisible, InfoPlayers, userInfo }) => {
  const players = useSelector((state) => state.user.favoritesPlayers);
  const classVisible = isPlayersVisible ? 'player active-contenu' : 'player hide-contenu';
  // players.forEach((element) => console.log(element.pseudo));
  return (
    <div id="PLAYERS" className={classVisible}>
      {players.map((player) => (
        <Link to={`/player/${player.player_id}`} key={player.player_id}><FavoritePlayer key={player.player_id} InfoPlayers={InfoPlayers} /></Link>
      ))}
    </div>
  );
};

export default PlayerContent;
