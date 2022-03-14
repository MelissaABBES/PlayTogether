import gamesInfo from '../../../../../assets/img/game-library.png';

const LibHeaderDiff = ({ handleVisibility }) => (
  <div
    onClick={(evt) => {
      evt.preventDefault();
      console.log('je clic');
      handleVisibility();
    }}
  >
    <img src={gamesInfo} alt="" />
    <p>Autres jeux</p>
  </div>
);
export default LibHeaderDiff;
