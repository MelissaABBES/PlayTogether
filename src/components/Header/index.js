import './style.scss';
import { useMediaQuery } from 'react-responsive';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import logoPlayTogether from '../../assets/img/logoPT.png';
import HeaderBtns from './HeaderBtns';
import ParamsProfil from './ParamsProfil';
import WelcomeSentence from './WelcomeSentence';

// == Composant
const Header = ({ isLogged, userInfo }) => {

  const isTabletOrDesktop = useMediaQuery({
    query: '(min-width: 1024px)',
    queryMax: '(max-width: 3840px)',
  });

  const { settings } = useSelector((state) => state.user);

  return (
  <div className="header">
    <Link to="/"><img className="header__img" src={logoPlayTogether} alt="Logo PlayTogether" /></Link>
    {!isLogged && <HeaderBtns />}
    {isTabletOrDesktop && isLogged && <WelcomeSentence {...settings} />}
    {isTabletOrDesktop && isLogged && <ParamsProfil />}
    
  </div>
  );
};

// == Export
export default Header;
