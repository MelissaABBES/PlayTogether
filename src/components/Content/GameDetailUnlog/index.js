import './style.scss';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import GameTag from './GameTag';
import level from 'src/assets/img/level.png';
import tetris from 'src/assets/img/tetris.png';
import platform from 'src/assets/img/platform.png';

// == Composant
const GameDetailUnlog = () => {
  const games = useSelector((state) => state.games);
  const { id } = useParams();
  const findGame = games.find((game) => id == game.id);
  return (
    <div className="game-detail">

      <div className="game-detail__infos">

        <div className="game-detail__infos__container">

          <div className="game-detail__infos__container__head">

            <h1 className="game-detail__infos__container__head--title">{findGame.name}</h1>

          </div>

          <div className="game-detail__infos__container__tags">
            {
              findGame.tags.forEach((tag) => {
                <div className="game-tag">
                  <p className="game-tag--tag">{tag}</p>
                </div>;
              })
            }

          </div>

        </div>

        <div className="game-detail__infos__desc">

          <p className="game-detail__infos__desc--text">{findGame.description}</p>

        </div>

      </div>

      <div className="game-detail__unlog">

        <p className="game-detail__unlog--text">Inscrivez-vous ou connectez vous pour avoir accès à la liste des joueurs jouants a ce jeu</p>

        <div className="game-detail__unlog__btns">

          <Link className="game-detail__unlog__btns--register" to="/register">S'inscrire</Link>
          <Link className="game-detail__unlog__btns--login" to="/login">Se logger</Link> 

        </div>

      </div>

    </div>
  );
};

// == Export
export default GameDetailUnlog;
