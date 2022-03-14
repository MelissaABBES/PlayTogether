/* eslint-disable no-case-declarations */
import axios from 'axios';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import {
  receivedSimilarGames, FETCH_SIMILAR_GAMES,
} from '../actions';
// TOUS TOUS TOUS les middlewares
// sont une triple fonction fléchée
const similarGamesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_SIMILAR_GAMES:
      next(action);
      // Je souhaite lancer la requête pour récup les recettes
      const { user_id, accessToken, currentPlayerId } = store.getState();
      axios({
        url: `https://playtogether-back.herokuapp.com/user/${user_id}/player/${currentPlayerId}/samegames`,
        method: 'get',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((res) => {
          const userGamesAction = receivedSimilarGames(res.data.datas);
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

export default similarGamesMiddleware;
