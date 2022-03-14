import { useDispatch } from 'react-redux';
import gamerInfo from '../../../../../assets/img/gamerInfo.png';

const InfosHeader = ({ handleVisibility }) => (
  <div
    onClick={(evt) => {
      evt.preventDefault();
      console.log('je clic');
      handleVisibility();
    }}
  >
    <img src={gamerInfo} alt="" />
    <p>Infos</p>
  </div>
);

export default InfosHeader;
