/* eslint-disable no-case-declarations */
import axios from 'axios';
import {
  FETCH_USERS_BY_GAME,
  fetchUsersByGameSucces,
} from '../actions';

// TOUS TOUS TOUS les middlewares
// sont une triple fonction fléchée
const usersByGameMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_USERS_BY_GAME:
      const currentGameId = parseInt(store.getState().currentGameId, 10);

      console.log(currentGameId);
      next(action);
      const { accessToken } = store.getState();
  
      axios({
        url: `https://playtogether-back.herokuapp.com/game/${currentGameId}/users`,
        method: 'get',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((res) => {
          const fetchUsersByGameAction = fetchUsersByGameSucces(res.data.datas);
          store.dispatch(fetchUsersByGameAction);
          // console.log('users by game', res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      break;
    default:
      next(action);
  }
};

export default usersByGameMiddleware;
