import './style.scss';
import { useSelector, useDispatch } from 'react-redux';
import level from 'src/assets/img/level.png';
import tetris from 'src/assets/img/tetris.png';
import platform from 'src/assets/img/platform.png';

// == Composant
const UserInfos = () => {
  
  const { favoritesGames } = useSelector((state) => state.user);

  console.log(favoritesGames);

  return (
    <div className="game-detail__userInfos">

          <h2 className="game-detail__userInfos--title">Infos joueur</h2>

          <div className="game-detail__userInfos__modif">

            <p className="game-detail__userInfos__modif--level">{favoritesGames.level}<img src={level} alt="Niveau du joueur" /></p>
            <p className="game-detail__userInfos__modif--platform">{favoritesGames.platform}<img src={platform} alt="Plateforme du joueur" /></p>
            <p className="game-detail__userInfos__modif--style">{favoritesGames.gameplay}<img src={tetris} alt="Style du joueur" /></p>

          </div>

          <button className="game-detail__userInfos__modify" type="button">Modifier</button>

      </div>
  );
};

// == Export
export default UserInfos;
