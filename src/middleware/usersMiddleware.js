/* eslint-disable no-case-declarations */
import axios from 'axios';
import {
  fetchUsers,
  FETCH_USERS,
  receivedUsers
} from '../actions';

// TOUS TOUS TOUS les middlewares
// sont une triple fonction fléchée
const usersMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_USERS:
      next(action);
  
      axios({
        url: 'https://playtogether-back.herokuapp.com/users',
        method: 'get',
      })
        .then((res) => {
          const fetchUsersAction = receivedUsers(res.data);
          store.dispatch(fetchUsersAction);
          // console.log(res.data);
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

export default usersMiddleware;
