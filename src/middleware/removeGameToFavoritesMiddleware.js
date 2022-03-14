/* eslint-disable no-case-declarations */
import axios from 'axios';
import { useParams } from 'react-router';
import {
  REMOVE_FAVORITES_GAMES,
  removeFavoritesGamesSucces,
  gameAlreadyInFavoritesSucces,
} from '../actions';

const removeGameToFavoritesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case REMOVE_FAVORITES_GAMES:
      const user_id = store.getState().user_id;
      // const user_id = store.getState().user.favoritesGames[0].user_id;

      const currentGameId = parseInt(store.getState().currentGameId, 10);
      const { accessToken } = store.getState();
      
      // console.log(user_id, currentGameId);
      axios({
        method: 'delete',
        url: `https://playtogether-back.herokuapp.com/user/${user_id}/game/${currentGameId}/deletegame`,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((res) => {
          console.log(res.data);
          // const actionAddFavoritesGames = removeFavoritesGamesSucces(res.data);
          // store.dispatch(actionAddFavoritesGames);
          store.dispatch(gameAlreadyInFavoritesSucces());
        })
        .catch((err) => {
          console.log(err);
        });
      break;
    default:
      next(action);
  }
};

export default removeGameToFavoritesMiddleware;
