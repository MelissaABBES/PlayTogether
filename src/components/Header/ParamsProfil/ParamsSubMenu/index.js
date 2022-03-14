import './style.scss';
import { Link } from 'react-router-dom';
import gear from 'src/assets/img/gear.png';
import { logOut } from '../../../../actions';
import { useDispatch } from 'react-redux';

// == Composant
const ParamsSubMenu = () => {

  const dispatch = useDispatch();

  return (
  <div className="params-subMenu">

    <Link className="params-subMenu--settings" to="/settings">Modifier profil</Link>
    <Link className="params-subMenu--home" to="/home" onClick={() => dispatch(logOut())}>Se déconnecter</Link>
    
  </div>
  );
};

// == Export
export default ParamsSubMenu;
