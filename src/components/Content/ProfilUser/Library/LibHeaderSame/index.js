import gamesInfo from '../../../../../assets/img/same-game.png';

const LibHeaderSame = ({ handleVisibility }) => (
  <div
    onClick={(evt) => {
      evt.preventDefault();
      console.log('je clic');
      handleVisibility();
    }}
  >
    <img src={gamesInfo} alt="" />
    <p>Jeux en commun</p>
  </div>
);
export default LibHeaderSame;
