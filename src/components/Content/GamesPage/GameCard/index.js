import './style.scss';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import gamer from 'src/assets/img/gamer.png';
import rating from 'src/assets/img/rating.png';
// import GameTag from './GameTag';
import ButtonDetail from './ButtonDetail';


// == Composant
const GameCard = ({ cover, id, description, name, note, platforms, tags }) => {

  const isTabletOrDesktop = useMediaQuery({
    query: '(min-width: 1024px)',
    queryMax: '(max-width: 3840px)',
  });
  
  return (
    <div className="game-card">

      <div className="game-card__left">

        <img className="game-card__left--img" src={cover} alt="Jeu" />
        
      </div>

      <div className="game-card__infos">

        <h2 className="game-card__infos--title">{name.substring(0, 10)}</h2>

        {/* <div className="game-card__infos--tags">

          <GameTag />

        </div> */}

        <div className="game-card__infos--platform">

        {platforms}

        </div>

        <div className="game-card__infos__players">

          <img className="game-card__infos__players--icon" src={gamer} alt="Gamer" />
          <p className="game-card__infos__players--counter">100</p>

        </div>

        <img className="game-card__infos--rating" src={rating} alt="Note du jeu" />

        {isTabletOrDesktop && <ButtonDetail gameId={id} />}

      </div>
     
    </div>
  );
};

// == Export
export default GameCard;
