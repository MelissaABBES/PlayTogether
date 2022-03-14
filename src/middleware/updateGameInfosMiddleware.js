/* eslint-disable no-case-declarations */
import axios from 'axios';
import {
  updateGameInfosSucces, UPDATE_GAME_INFOS,
} from '../actions';

// TOUS TOUS TOUS les middlewares
// sont une triple fonction fléchée
const updateGameInfosMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case UPDATE_GAME_INFOS:
      next(action);
      const { level, platform, gameplay } = store.getState().user.favoritesGames;
      const { accessToken } = store.getState();
      console.log(accessToken);
      axios({
        method: 'PATCH',
        url: `https://playtogether-back.herokuapp.com/user/${id}/updateParameters`,
        data: {
          level, platform, gameplay,
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((res) => {
          console.log(res.data);
          const actionUpdateGameInfos = updateGameInfosSucces(res.data.datas);
          store.dispatch(actionUpdateGameInfos);
          console.log(`Je reçois les nouvelles infos d'un jeu`, actionUpdateGameInfos);
        })
        .catch((err) => {
          console.log(err);
        });
      break;
    default:
      next(action);
  }
};

export default updateGameInfosMiddleware;
