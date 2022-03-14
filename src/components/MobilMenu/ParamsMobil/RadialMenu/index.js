import './style.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from '../../../../actions';

// == Composant
const RadialMenu = () => {

  const dispatch = useDispatch();

  const logged = useSelector((state) => state.logged);

  console.log(logged);
  return (
  <div className="radial-menu">
  
    <Link to="/profil"><p className="radial-menu--infos">Infos</p></Link>
    <Link to="/profil"><p className="radial-menu--myGames">Mes jeux</p></Link>
    <Link to="/profil"><p className="radial-menu--users">Joueurs</p></Link>
    <Link to="/home"><p className="radial-menu--logout" onClick={() => dispatch(logOut())}>Logout</p></Link>
  </div>
  );
};

// == Export
export default RadialMenu;
