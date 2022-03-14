/* eslint-disable no-case-declarations */
import axios from 'axios';
import {
  LOGIN, LOGIN_SUCCESS, CHECK_USER, loginSuccess, receivedUserInfo, RECEIVED_USER_INFO, receivedGamesInfos, RECEIVED_GAMES_INFOS, FETCH_GAMES_INFOS,
} from 'src/actions';

// TOUS TOUS TOUS les middlewares
// sont une triple fonction fléchée
const ajaxMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CHECK_USER:
      next(action);
      const foundStringUser = localStorage.getItem('user');
      if (foundStringUser) {
        // const user = JSON.parse(foundStringUser);
        // const userAction = loginSuccess(user);
        // store.dispatch(userAction);
      }
      break;
    case LOGIN:
      const { email, password } = store.getState().user;
      axios({
        method: 'post',
        url: 'https://playtogether-back.herokuapp.com/login',
        data: {
          email, password,
        },
      })
        .then((res) => {
          const actionLoginSuccess = loginSuccess(res.data);
          store.dispatch(actionLoginSuccess);
        })
        .catch((err) => {
          console.log(err);
        });
      break;
    case LOGIN_SUCCESS:
      next(action);
      const { accessToken, user_id } = store.getState();

      const stringUser = JSON.stringify(accessToken);
      localStorage.setItem('user', stringUser);
      axios({
        method: 'get',
        url: `https://playtogether-back.herokuapp.com/user/${user_id}`,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((res) => {
          const userInfoAction = receivedUserInfo(res.data.connectedUser);
          store.dispatch(userInfoAction);
        })
        .catch((err) => {
          console.log(err);
        });
      break;
    case RECEIVED_USER_INFO:
      next(action);
      const { logged } = store.getState().user;
      if (logged) {
        console.log('vulli');
      }
      break;
    case FETCH_GAMES_INFOS:
      next(action);
      axios({
        method: 'get',
        url: 'https://playtogether-back.herokuapp.com/games',
      })
        .then((res) => {
          const actionReceivedGamesInfos = receivedGamesInfos(res.data);
          store.dispatch(actionReceivedGamesInfos);

          // const actionReceivedGamesInfos = receivedGamesInfos(res.data);
          // store.dispatch(actionReceivedGamesInfos);
        })
        .catch((err) => {
          console.log(err);
        });
      break;
    default:
      next(action);
  }
};

export default ajaxMiddleware;
