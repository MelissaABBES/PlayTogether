import './style.scss';

// == Composant
const WelcomeSentence = ({ pseudo }) => (

  <div className="welcome">
    <p className="welcome--sentence">A quoi voulez-vous jouer aujourd'hui <span>{pseudo}</span> ?</p>
  </div>
);

// == Export
export default WelcomeSentence;
