import playersInfo from '../../../../../assets/img/multiplayer.png';

const PlayerHeader = ({ handleVisibility }) => (
  <div
    className="joueurs"
    onClick={(evt) => {
      evt.preventDefault();
      console.log('je clic');
      handleVisibility();
    }}
  >
    <img src={playersInfo} alt="" />
    <p>Joueurs suivis</p>
  </div>
);
export default PlayerHeader;
