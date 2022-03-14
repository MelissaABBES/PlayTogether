import gamesInfo from '../../../../../assets/img/game-library.png';

const LibHeader = ({ handleVisibility }) => (
  <div
    onClick={(evt) => {
      evt.preventDefault();
      console.log('je clic');
      handleVisibility();
    }}
  >
    <img src={gamesInfo} alt="" />
    <p>Bibliothèque</p>
  </div>
);
export default LibHeader;
