import './style.scss';
import { Link } from 'react-router-dom';
import gifError from 'src/assets/img/404.gif';
import { useMediaQuery } from 'react-responsive';

// == Composant
const Error = () => {
  
  const isMobile = useMediaQuery({
    query: '(max-width: 1023px)',
  });

  return (
    <div className="page-error">

      <div className="page-error__container">

        <div className="page-error__container__text">

          <h1 className="page-error__container__text--title">Erreur 404</h1>

          <p className="page-error__container__text--desc">Vous avez demandé une page qui n'existe pas ! Veuillez vous rediriger vers la page d'accueil</p>

          {!isMobile && <Link to="/home" className="page-error__button">Accueil</Link>}

        </div>

        <img className="page-error__container--img" src={gifError} alt="gif page non trouvée"/>

      </div>

      

    </div>
  );
};

// == Export
export default Error;
