import './style.scss';
import logo from 'src/assets/img/Mini-logoPT.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

// == Composant
const LandingPage = () => {
  const games = useSelector((state) => state.games);

  const [loadingGames, setloadingGames] = useState(true);

  useEffect(() => {
    if (games.length >= 3) {
      setloadingGames(false);
    }
  }, [games]);

  return (
    <div className="landing-page">

      <div className="landing-page__container">

        <div className="landing-page__container__infos">

          <h1 className="landing-page__container__infos--title">PlayTogether</h1>

          <img className="landing-page__container__infos--logo" src={logo} alt="Logo playtogether" />

        </div>

        <div className="landing-page__container__carousel">

          {!loadingGames && (
          <><img className="landing-page__container__carousel--1" src={games[0].cover} alt={games[0].name} />
            <img className="landing-page__container__carousel--2" src={games[1].cover} alt={games[1].name} />
            <img className="landing-page__container__carousel--3" src={games[2].cover} alt={games[2].name} />
          </>
          )}

        </div>

      </div>

      <div className="landing-page__start">

        <Link className="landing-page__start--link" to="/home">START</Link>

      </div>

    </div>
  );
};

// == Export
export default LandingPage;
