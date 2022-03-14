import './style.scss';
import { NavLink } from 'react-router-dom';

// == Composant
const Footer = () => {
  
  return(
    <div className="footer">
      <div className="footer__Nav">  
        <NavLink to="/home">Accueil</NavLink>
        <NavLink to="/games">Jeux</NavLink>
        <NavLink to="/legals">Mentions légales</NavLink>
        <NavLink to="/privacy">Politique de confidentialité</NavLink>
        <NavLink to="/team">Team</NavLink>
      </div>
    </div>
    );
  }
// == Export
export default Footer;
