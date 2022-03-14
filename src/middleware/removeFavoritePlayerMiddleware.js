/* eslint-disable no-case-declarations */
import axios from 'axios';
import {
  RemoveFavoritePlayerSuccess,
  REMOVE_FAVORITE_PLAYER,
} from '../actions';

const removeFavoriteUserMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case REMOVE_FAVORITE_PLAYER:
      next(action);
      const { accessToken, user_id } = store.getState();
      const currentPlayerId = parseInt(store.getState().currentPlayerId, 10);
      console.log(user_id, currentPlayerId);
      
      axios({
        method: 'DELETE',
        url: `https://playtogether-back.herokuapp.com/user/${user_id}/player/${currentPlayerId}/unfollowPlayer`,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((res) => {
          // console.log(res.data);
          const actionRemoveFavoritesPlayer = RemoveFavoritePlayerSuccess(res.data);
          store.dispatch(actionRemoveFavoritesPlayer);
        })
        .catch((err) => {
          console.log(err);
        });
      break;
    default:
      next(action);
  }
};

export default removeFavoriteUserMiddleware;
