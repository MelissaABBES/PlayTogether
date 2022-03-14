import './style.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

// == Composant
const ButtonDetail = ({ gameId }) => {
  
  const games = useSelector((state) => state.games);
  // console.log('jeux reçus', games);
  // console.log('id jeu', games[1].id);

  // const user = useSelector((state) => state.user);
  // console.log('user', user);

  const [loadingGames, setloadingGames] = useState(true);

  useEffect(() => {
    if (games.length >= 3) {
      setloadingGames(false);
    }
  }, [games]);

  return (
    <div className="button-detail">

      <Link to={`/games/game/${gameId}`} className="button-detail--button">Voir détail</Link>
     
    </div>
  );
};

// == Export
export default ButtonDetail;
