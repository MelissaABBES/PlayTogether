import { useSelector } from 'react-redux';
import './style.scss';

// == Composant
const GameTag = ({ tag }) => (
  <div className="game-tag">

    <p className="game-tag--tag">tag</p>

  </div>
);

// == Export
export default GameTag;
