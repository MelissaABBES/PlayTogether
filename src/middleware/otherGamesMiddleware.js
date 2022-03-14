/* eslint-disable no-case-declarations */
import axios from 'axios';
import {
  receivedAllPlayerGames, FETCH_ALL_PLAYER_GAMES,
} from '../actions';
// TOUS TOUS TOUS les middlewares
// sont une triple fonction fléchée
const otherGamesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ALL_PLAYER_GAMES:
      next(action);
      // Je souhaite lancer la requête pour récup les recettes
      const { user_id, accessToken, currentPlayerId } = store.getState();
      axios({
        url: `https://playtogether-back.herokuapp.com/user/${user_id}/player/${currentPlayerId}/othergames`,
        method: 'get',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((res) => {
          const userOtherGamesAction = receivedAllPlayerGames(res.data.datas);
          console.log(userOtherGamesAction);
          store.dispatch(userOtherGamesAction);
        })
        .catch((err) => {
          console.log(err);
        });
      // Quand je les reçois, je souhaite les mettre dans mon state
      // Je dois dispatcher une action (RECIPES_RECEIVED)
      // Et y réagir dans mon reducer.
      break;
    default:
      next(action);
  }
};

export default otherGamesMiddleware;
