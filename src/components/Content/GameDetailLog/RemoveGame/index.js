import './style.scss';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { removeFavoritesGames, fetchUserGames } from 'src/actions';

// == Composant
const RemoveGame = () => {
  
  const [infosVisible, setInfosVisible] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="remove-game">

      <button type="button" className="remove-game--button" onClick={() => { const action = removeFavoritesGames(); dispatch(action); dispatch(fetchUserGames()); setInfosVisible(false)}} >Supprimer</button>
     
    </div>
  );
};

// == Export
export default RemoveGame;
