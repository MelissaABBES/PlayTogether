// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
import rootReducer from 'src/reducers';
import ajaxMiddleware from '../middleware/ajaxMiddleware';
import userSettingsMiddleware from '../middleware/userSettingsMiddleware';
import userGamesMiddleware from '../middleware/userGamesMiddleware';
import userPlayersMiddleware from '../middleware/userPlayersMiddleware';
import userProfilMiddleware from '../middleware/userProfilMiddleware';
import usersMiddleware from '../middleware/usersMiddleware';
import cloudinaryMiddleware from '../middleware/cloudinaryMiddleware';
import addGameToFavoritesMiddleware from '../middleware/addGameToFavoritesMiddleware';
import removeGameToFavoritesMiddleware from '../middleware/removeGameToFavoritesMiddleware';
import usersByGameMiddleware from '../middleware/usersByGameMiddleware';
import newUserMiddleware from '../middleware/newUserMiddleware';
import similarGamesMiddleware from '../middleware/similarGamesMiddleware';
import otherGamesMiddleware from '../middleware/otherGamesMiddleware';
import addFavoriteUserMiddleware from '../middleware/addFavoriteUserMiddleware';
import removeFavoriteUserMiddleware from '../middleware/removeFavoritePlayerMiddleware';
import updateGameInfosMiddleware from '../middleware/updateGameInfosMiddleware';

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    // logMiddleware,
    ajaxMiddleware,
    userSettingsMiddleware,
    userGamesMiddleware,
    userPlayersMiddleware,
    userProfilMiddleware,
    usersMiddleware,
    cloudinaryMiddleware,
    addGameToFavoritesMiddleware,
    removeGameToFavoritesMiddleware,
    similarGamesMiddleware,
    usersByGameMiddleware,
    newUserMiddleware,
    otherGamesMiddleware,
    addFavoriteUserMiddleware,
    removeFavoriteUserMiddleware,
    updateGameInfosMiddleware
  ),
);

// == Store
const store = createStore(
  rootReducer,
  // preloadedState,
  enhancers,
);

// == Export
export default store;
