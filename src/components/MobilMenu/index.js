import './style.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ParamsMobil from './ParamsMobil';
import ProfilMobil from './ProfilMobil';
import controller from '../../assets/img/game-controller.png';
import home from '../../assets/img/house.png';

// == Composant
const MobilMenu = () => {

  const logged = useSelector((state) => state.logged);

  console.log(logged);
  return (
  <div className="menu">
    <Link to="/games"><img className="menu__controller" src={controller} /></Link>
    {logged && <ParamsMobil />}
    <Link to="/home"><img className="menu__home" src={home} /></Link>
    {logged && <ProfilMobil />}
    
  </div>
  );
};

// == Export
export default MobilMenu;
