import './style.scss';
import {
  Routes, Route,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserPlayers, fetchUserGames, createUser } from 'src/actions';
import { useEffect } from 'react';
import Login from './Login';
import Error from './Error';
import AccountSettingsPage from './AccountSettingsPage';
import ProfilUser from './ProfilUser';
import GamesPage from './GamesPage';
import GameDetailLog from './GameDetailLog';
import GameDetailUnlog from './GameDetailUnlog';
import ForgotPassword from './Login/ForgotPassword';
import Inscription from './Inscription';
import JeuxUnlog from './JeuxUnlog';
import MyProfil from './MyProfil';
import HomePage from './HomePage';
import Team from './Team';
import Footer from '../Footer';
import ProfilUserByGame from './ProfilUserByGame';

// == Composant
const Content = ({ isLogged, userInfo }) => {
  const { logged } = useSelector((state) => state);
  const games = useSelector((state) => state.games);
  const allPlayers = useSelector((state) => state.usersByGame);
  

  // console.log('games content', games);
  const dispatch = useDispatch();

  useEffect(() => {
    const action = fetchUserGames();
    dispatch(action);
    const action2 = fetchUserPlayers();
    dispatch(action2);
  }, [logged]);

  return (
    <div className="main-content">
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/login"
          element={<Login isLogged={logged} />}
        />
        {isLogged && (
        <Route
          path="/settings"
          element={<AccountSettingsPage />}
        />
        )}
        <Route path="/games" element={<GamesPage />} />
        <Route path="/games/unlog" element={<JeuxUnlog />} />
        <Route
          path="/register"
          element={(
            <Inscription handleCreateUser={() => {
              const createUserAction = createUser();
              dispatch(createUserAction);
            }}
            />
          )}
        />
        <Route path="/password" element={<ForgotPassword />} />
        <Route path="/*" element={<Error isLogged={logged} />} />
        <Route path="games/game/:id" element={isLogged ? <GameDetailLog /> : <GameDetailUnlog />} />
        <Route path="/team" element={<Team />} />
        <Route
          path="/profil"
          element={(
            <MyProfil
              handleModal={() => {
                // console.log('jai la modal');
              }}
              {...userInfo}
              userIno={userInfo}
            />
          )}
        />
        <Route path="/player/:id" element={<ProfilUser />} />
        <Route path="/games/player/:id" element={<ProfilUserByGame infoAllPlayer={allPlayers} />} />
      </Routes>
      <Footer />
    </div>
  );
};
// == Export
export default Content;
