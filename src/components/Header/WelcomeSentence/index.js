import './style.scss';
import { useSelector } from 'react-redux';


// == Composant
const WelcomeSentence = ({ pseudo }) => {

  console.log(pseudo);

  return (

  <div className="welcome">
        <p className="welcome--sentence">A quoi voulez-vous jouer aujourd'hui <span>{pseudo}</span> ?</p>
  </div>
  );
};

// == Export
export default WelcomeSentence;
