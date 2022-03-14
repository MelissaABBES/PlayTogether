import { Link } from 'react-router-dom';
import flag from 'src/assets/img/france.png';
import { useSelector } from 'react-redux';

const FavoritePlayer = ({
  InfoPlayersFav,
  profile_picture,
  pseudo,
  age,
  player_id,
}) => {
  const favoritesPlayers = useSelector((state) => state.user.favoritesPlayers);
  const foundPlayer = favoritesPlayers.find((gPlayer) => gPlayer.id === InfoPlayersFav);
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
