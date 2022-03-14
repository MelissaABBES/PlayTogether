// == Import
import { useMediaQuery } from 'react-responsive';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './styles.scss';
import { checkUser, fetchGamesInfos, fetchUsers, fetchUsersByGame, fetchUsersByGameSucces } from 'src/actions';
import { receivedGamesInfos } from 'src/actions';
import Header from '../Header';
import LandingPage from '../LandingPage';
import Content from '../Content';
import MenuLeft from '../MenuLeft';

import MobilMenu from '../MobilMenu';

// == Composant
const PlayTogether = () => {
  const { logged, user } = useSelector((state) => state);
  const { settings } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  console.log(settings);

  useEffect(() => {
    const action = checkUser();
    dispatch(action);
    const action2 = fetchGamesInfos();
    dispatch(action2);
    const action3 = fetchUsers();
    dispatch(action3);
    // const action4 = fetchUsersByGameSucces();
    // dispatch(action4);
  }, []);

  const games = useSelector((state) => state.games);
  // console.log('dans playtogether', games);

  const isMobile = useMediaQuery({
    query: '(max-width: 1023px)',
  });

  const isTabletOrDesktop = useMediaQuery({
    query: '(min-width: 1024px)',
    queryMax: '(max-width: 3840px)',
  });

  return (
    <div className="playtogether">

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/*"
          element={(
            <div className="main">
              {isTabletOrDesktop && <MenuLeft isLogged={logged} settings={settings} /> }
              <Header isLogged={logged} userInfo={user} />
              <Content isLogged={logged} games={games} userInfo={user} />
              {isMobile && <MobilMenu />}
            </div>
          )}
        />

      </Routes>

    </div>
  );
};

// == Export
export default PlayTogether;
