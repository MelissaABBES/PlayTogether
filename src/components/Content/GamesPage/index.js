import './style.scss';
import { useMediaQuery } from 'react-responsive';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import GameCard from './GameCard';


// == Composant
const GamesPage = () => {

  const isMobile = useMediaQuery({
    query: '(max-width: 1023px)',
  });

  const isTabletOrDesktop = useMediaQuery({
    query: '(min-width: 1024px)',
    queryMax: '(max-width: 3840px)',
  });

  // const games = useSelector((state) => state.games);
  

  // const user = useSelector((state) => state.user);
  // console.log('user', user);

  const [filterText, setFilterText] = useState('');
  const [filterGender, setFilterGender] = useState('');
  const [filterPlatform, setFilterPlatform] = useState('');
  const [filterNote, setFilterNote] = useState('');

  // console.log(typeof filterNote, filterNote);

  const games = useSelector((state) => {
    // je filtre la liste complete de jeux
    return state.games.filter((game) => {
      // je créer une variable d'affichage est qui True par défaut
      let isGameDisplayed = true
      // si j'ai saisi un filtre dans ma barre de recherche et que ça ne correspond pas au titre du jeu
      if(filterText.length && !game.name.toLowerCase().includes(filterText)){
        // je retourne ma variable a false pour ne pas retourner le jeu dans la liste des jeux
        isGameDisplayed = false
      }
      if(filterGender.length && !game.tags.includes(filterGender)){
        // je retourne ma variable a false pour ne pas retourner le jeu dans la liste des jeux
        isGameDisplayed = false
      }
      if(filterPlatform.length && !game.platforms.includes(filterPlatform)){
        // je retourne ma variable a false pour ne pas retourner le jeu dans la liste des jeux
        isGameDisplayed = false
      }
      if(Number(filterNote) !== game.note && filterNote){
        // je retourne ma variable a false pour ne pas retourner le jeu dans la liste des jeux
        isGameDisplayed = false
      }
      return isGameDisplayed;
    })
  });
  // console.log('jeux reçus ', 'nombres de jeu', games.length, games);

  // console.log(typeof filterNote);

  return (
    <div className="games-page">

      <div className="games-page__title">

        <h1 className="games-page__title-text">Bibliothèque de jeux</h1>

      </div>

      <form className="games-page__inputs">

        <div className="games-page__inputs__search">

          <input className="games-page__inputs__search--input" value={filterText} onChange={(e) => setFilterText(e.target.value)} placeholder="Rechercher un jeu" type="search"/>

        </div>

        <div className="games-page__inputs__filters">

          <div className="games-page__inputs__filters__select">

            <label for="gender">Genre</label>

            <select className="games-page__inputs__filters__select--gender" value={filterGender} onChange={(e) => setFilterGender(e.target.value)} name="filters" id="gender">
                <option value=""></option>
                <option value="Aventure">Aventure</option>
                <option value="Reflexion">Réflexion</option>
                <option value="Open-world">Open-world</option>
                <option value="RPG">RPG</option>
                <option value="FPS">FPS</option>
                <option value="Action">Action</option>
                <option value="Course">Course</option>
                <option value="MMORPG">MMORPG</option>
                <option value="Sport">Sport</option>
                <option value="Coop">Coop</option>
                <option value="Zombies">Zombies</option>
                <option value="BR">Battle royale</option>
                <option value="Sport">Sport</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Horreur">Horreur</option>
                <option value="Survival">Survival</option>
                <option value="MMO">MMO</option>
                <option value="Sand-box">Sand-box</option>
                <option value="Stratégie">Stratégie</option>
                <option value="Plateforme">Plateforme</option>
                <option value="Combat">Combat</option>
                <option value="Simulation">Simulation</option>
                <option value="Space">Space</option>
                <option value="Dark Fantasy">Dark Fantasy</option>
            </select>
            
          </div>

          <div className="games-page__inputs__filters__select">

            <label for="platform">Plateforme</label>

            <select className="games-page__inputs__filters__select--platform" value={filterPlatform} onChange={(e) => setFilterPlatform(e.target.value)} name="filters" id="platform">
                <option value=""></option>
                <option value="Playstation">Playstation</option>
                <option value="Xbox">Xbox</option>
                <option value="PC">PC</option>
                <option value="Switch">Switch</option>
            </select>
            
          </div>

          <div className="games-page__inputs__filters__select">

            <label for="note">Note</label>

            <select className="games-page__inputs__filters__select--note" value={parseInt(filterNote, 10)} onChange={(e) => setFilterNote(e.target.value)} name="filters" id="note">
                <option value=""></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            
          </div>

          {/* <div className="games-page__inputs__filters__select">

            <label for="platform">Joueurs</label>

            <select className="games-page__inputs__filters__select--players" value={filterGender} onChange={(e) => setFilterGender(e.target.value)} name="filters" id="players">
                <option value=""></option>
                <option value="psn">Psn</option>
                <option value="xbox">Xbox</option>
                <option value="nintendo">Nintendo</option>
                <option value="eg">Epic Games</option>
                <option value="steam">Steam</option>
                <option value="origin">Origin</option>
            </select>

          </div> */}

        </div>

      </form>

      <div className="games-page__counter">

        <p className="games-page__counter__text"><span className="games-page__counter__text--number">{games.length}</span> jeux trouvés</p>

      </div>

      <div className="games-page__games">

        {isMobile && <> {games.map((game) => (<Link to={`game/${game.id}`}><GameCard key={game.id} {...game} /></Link>))} </>}

        {isTabletOrDesktop && <> {games.map((game) => (<GameCard key={game.id} {...game} />))} </>}

      </div>

    </div>
  );
};

// == Export
export default GamesPage;
