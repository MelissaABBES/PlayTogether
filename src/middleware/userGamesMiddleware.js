/* eslint-disable no-case-declarations */
import axios from 'axios';
import {
  ReceivedUserGames, FETCH_USER_GAMES,
} from '../actions';

// TOUS TOUS TOUS les middlewares
// sont une triple fonction fléchée
const userGamesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_USER_GAMES:
      next(action);
      // Je souhaite lancer la requête pour récup les recettes
      const { user_id, accessToken } = store.getState();
      axios({
        url: `https://playtogether-back.herokuapp.com/user/${user_id}/library`,
        method: 'get',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((res) => {
          const userGamesAction = ReceivedUserGames(res.data.datas);
          console.log(userGamesAction);
          store.dispatch(userGamesAction);
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

export default userGamesMiddleware;
