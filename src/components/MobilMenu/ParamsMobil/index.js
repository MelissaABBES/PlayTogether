import './style.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { displayMobilMenu } from '../../../actions';
import RadialMenu from './RadialMenu';
import gear_mobil from 'src/assets/img/gear_mobil.png';

// == Composant
const ParamsMobil = () => {

  const logged = useSelector((state) => state.logged);
  const mobilVisible = useSelector((state) => state.mobilVisible);
  const dispatch = useDispatch();
  const action = displayMobilMenu();

  console.log(mobilVisible);
  return (
  <div className="params-mobil">
    <Link to="#" onClick={() => {dispatch(action)}}><img className="params-mobil--radial" src={gear_mobil} /></Link>
    {mobilVisible && <RadialMenu />}

  </div>
  );
};

// == Export
export default ParamsMobil;
