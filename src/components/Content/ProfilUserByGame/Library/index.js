import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import LibSameContent from './LibSameContent';
import LibDiffContent from './LibDiffContent';

const Library = () => {
  const { gamesVisible, otherGamesVisible } = useSelector((state) => state);
  // const players = useSelector((state) => state.user.favoritesPlayers);
  // const players = useSelector((state) => state.user.usersByGame);
  const SameGames = useSelector((state) => state.user.similarGames);
  const otherGames = useSelector((state) => state.user.otherGames);
  const { id } = useParams();

  console.log('library', SameGames);
  console.log('library', otherGames);

  return (
    <>
      {/* <LibSameContent
        isGamesVisible={gamesVisible}
      /> */}
      <LibDiffContent
        isOtherGamesVisible={otherGamesVisible}
      />
    </>
  );
};

export default Library;
