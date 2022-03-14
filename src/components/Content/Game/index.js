import { useSelector } from 'react-redux';
import './style.scss';

const Game = ({
  cover, name, note, platforms, tags, id
}) => {
  console.log('jysuis');
  // const platforms = useSelector((state) => state.user.favoritesGames.platforms);
  // const tags = useSelector((state) => state.user.favoritesGames.tags);
  return (
    <div className="game" key={id}>
      <div className="game__cover">
        <img src={cover} alt="" />
        <div className="tags">
          {tags.map((tag) => (
            <div className="game__cover-tag" key={tag.id}>{tag}</div>
          ))}
        </div>
      </div>
      <div className="game__infos">
        <div className="game__info">
          <h2>{name}</h2>
        </div>
        <div className="game__info">
          {platforms.map((platform) => (
            <div className="game__info-platform" key={platform.id}>{platform}</div>
          ))}
        </div>
        <div className="game__info">
          {note}
        </div>
      </div>
    </div>
  );
};

export default Game;
