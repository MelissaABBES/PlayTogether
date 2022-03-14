import './style.scss';
import { NavLink } from 'react-router-dom';
import userLogo from 'src/assets/img/user.png';


// == Composant
const MenuProfil = () => (

  <>
    <NavLink className="menu__tablet__container--profil" to="#">Profil</NavLink>
    
  <div className="menu__tablet__subMenu">

      <NavLink className="menu__tablet__subMenu--infos" to="/profil">Mes infos</NavLink>
      {/* <NavLink className="menu__tablet__subMenu--my-games" to="/myGame">Mes jeux</NavLink>
      <NavLink className="menu__tablet__subMenu--follow-users" to="/follow-users">Joueurs suivis</NavLink> */}

    </div>
  </>
);

// == Export
export default MenuProfil;
