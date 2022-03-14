import { Link } from 'react-router-dom';
import computer from 'src/assets/img/computer.png';
import tetris from 'src/assets/img/tetris.png';
import flag from 'src/assets/img/france.png';
import { useSelector } from 'react-redux';

const PlayerByGame = ({
  InfoPlayers,
}) => {
  console.log('jysuis');
  const usersByGame = useSelector((state) => state.usersByGame);
  const foundPlayer = usersByGame.find((gPlayer) => gPlayer.id === InfoPlayers);
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
        <Link type="button" className="card-user__button" to={`/games/player/${foundPlayer.id}`}>Voir le profil</Link>
      </div>

    </>
  );
};

export default PlayerByGame;
