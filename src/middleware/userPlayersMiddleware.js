/* eslint-disable no-case-declarations */
import axios from 'axios';
import {
  ReceivedUserPlayers, FETCH_USER_PLAYERS,
} from '../actions';

// TOUS TOUS TOUS les middlewares
// sont une triple fonction fléchée
const userPlayersMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_USER_PLAYERS:
      next(action);
      // Je souhaite lancer la requête pour récup les recettes
      const { user_id, accessToken } = store.getState();
      axios({
        url: `https://playtogether-back.herokuapp.com/user/${user_id}/favorites`,
        method: 'get',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((res) => {
          console.log(res.data);
          const userPlayersAction = ReceivedUserPlayers(res.data.datas);
          store.dispatch(userPlayersAction);
          console.log(res.data.datas);
        })
        .catch((err) => {
          console.log(err);
        });
      
      break;
    default:
      next(action);
  }
};

export default userPlayersMiddleware;
