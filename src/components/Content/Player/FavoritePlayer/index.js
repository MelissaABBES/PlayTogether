import { Link } from 'react-router-dom';
import computer from 'src/assets/img/computer.png';
import tetris from 'src/assets/img/tetris.png';
import flag from 'src/assets/img/france.png';
import { useSelector } from 'react-redux';
import Loader from '../../Loader';

const FavoritePlayer = ({
  InfoPlayersFav,
  players,
  profile_picture,
  pseudo,
  age,
  player_id,
  InfoPlayers,
}) => {
  console.log('jysuis');
  const favoritesPlayers = useSelector((state) => state.user.favoritesPlayers);
  const foundPlayer = favoritesPlayers.find((gPlayer) => gPlayer.id === InfoPlayersFav);
  // console.log(players.id);
  console.log(foundPlayer);
  if (foundPlayer !== undefined) {
    return (
      <>
        <div className="card-user-avatar">
          <img className="card-user__avatar--img" src={foundPlayer.profile_picture} alt="Avatar de l'user" />
        </div>
        <div className="card-user">
          <p className="card-user__pseudo">{foundPlayer.pseudo}</p>
          <div className="card-user-info">
            <p className="card-user__age">{foundPlayer.age} ans</p>
            <img className="card-user__infos--nationality" src={flag} alt="Drapeau du pays de l'user" />
          </div>
          <Link type="button" className="card-user__button" to={`/player/${foundPlayer.player_id}`}>Voir le profil</Link>
        </div>
      </>
    );
  }
  
  // InfoPlayers.forEach(element => console.log(element.pseudo));
  // InfoPlayers.map(element => {
    for (const [key, value] of Object.entries(InfoPlayers)) {
      console.log(`${key}: ${value}`);
    }
  // });

  return (
    <>
      <div className="card-user-avatar">
        <img className="card-user__avatar--img" src={profile_picture} alt="Avatar de l'user" />
      </div>
      <div className="card-user">
        <p className="card-user__pseudo">{pseudo}</p>
        <div className="card-user-info">
          <p className="card-user__age">{age} ans</p>
          <img className="card-user__infos--nationality" src={flag} alt="Drapeau du pays de l'user" />
        </div>
        <Link type="button" className="card-user__button" to={`/player/${player_id}`}>Voir le profil</Link>

      </div>
    </>
  );
};

export default FavoritePlayer;
