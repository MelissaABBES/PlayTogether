import './style.scss';
import userLogo from 'src/assets/img/user.png';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import user from 'src/assets/img/user.png';
import login from 'src/assets/img/login.png';

// == Composant
const headerBtns = () => {

  const isMobile = useMediaQuery({
    query: '(max-width: 1023px)',
  });

  const isTabletOrDesktop = useMediaQuery({
    query: '(min-width: 1024px)',
    queryMax: '(max-width: 3840px)',
  });

  return (

  <div className="header__btn">
        <Link className="header__btn__register" to="/register">{isTabletOrDesktop && 'S\'inscrire'}{isMobile && <img src={user} />}</Link>
        <Link className="header__btn__login" to="/login">{isTabletOrDesktop && 'Login'}{isMobile && <img src={login} />}</Link>
  </div>
  );
};

// == Export
export default headerBtns;
