/* eslint-disable no-case-declarations */
import axios from 'axios';
import {
  AddFavoritePlayerSuccess,
  ADD_FAVORITE_PLAYER,
} from '../actions';

const addFavoriteUserMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_FAVORITE_PLAYER:
      next(action);
      const { accessToken, user_id } = store.getState();
      const currentPlayerId = parseInt(store.getState().currentPlayerId, 10);
      console.log(user_id, currentPlayerId);
      axios({
        method: 'POST',
        url: `https://playtogether-back.herokuapp.com/user/${user_id}/player/${currentPlayerId}/addplayer`,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((res) => {
          // console.log(res.data);
          const actionAddFavoritesPlayer = AddFavoritePlayerSuccess(res.data);
          store.dispatch(actionAddFavoritesPlayer);
        })
        .catch((err) => {
          console.log(err);
        });
      next(action);
      break;
    default:
      next(action);
  }
};

export default addFavoriteUserMiddleware;
