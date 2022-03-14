import './style.scss';
import { NavLink } from 'react-router-dom';
import MenuAvatar from './MenuAvatar';
import MenuProfil from './MenuProfil';

// == Composant
const MenuLeft = ({ isLogged, settings }) => (
  <div className="menu__tablet">
    <div className="menu__tablet__avatar">
      {isLogged && <MenuAvatar {...settings} />}
    </div>
    <div className="menu__tablet__container">
      <NavLink className="menu__tablet__container--home" to="/home">Accueil</NavLink>
      <NavLink className="menu__tablet__container--games" to="/games">Jeux</NavLink>
      <NavLink className="menu__tablet__container--games" to="/team">Team</NavLink>
      

    </div>

    {isLogged && <MenuProfil />}

  </div>
);

// == Export
export default MenuLeft;
