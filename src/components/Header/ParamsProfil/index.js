import './style.scss';
import { useSelector, useDispatch } from 'react-redux';
import { displayParams } from '../../../actions';
import ParamsSubMenu from './ParamsSubMenu';
import gear from 'src/assets/img/gear_mobil.png';

// == Composant
const ParamsProfil = () => {

  const { visible } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
  <div className="params-profil">

    <img className="params-profil--icon" src={gear} alt="Icone de paramètres de profil" onClick={() => {
      const action = displayParams();
      dispatch(action) }} />
      
    {visible && <ParamsSubMenu />}
  </div>
  );
};

// == Export
export default ParamsProfil;
