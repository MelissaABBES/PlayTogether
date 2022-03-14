/* eslint-disable no-case-declarations */
import axios from 'axios';
import {
  userInfoSuccess, UPDATE_INFO_USER,
} from '../actions';

// TOUS TOUS TOUS les middlewares
// sont une triple fonction fléchée
const userSettingsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case UPDATE_INFO_USER:
      next(action);
      const {
        email, password, id, profile_picture, pseudo,
      } = store.getState().user.settings;
      const { accessToken } = store.getState();
      console.log(accessToken);
      axios({
        method: 'PATCH',
        url: `https://playtogether-back.herokuapp.com/user/${id}/updateParameters`,
        data: {
          email, password, profile_picture, pseudo,
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((res) => {
          console.log(res.data);
          const actionUpdate = userInfoSuccess(res.data.datas);
          store.dispatch(actionUpdate);
          console.log('Je reçois les nouvelles données', actionUpdate);
        })
        .catch((err) => {
          console.log(err);
        });
      break;
    default:
      next(action);
  }
};

export default userSettingsMiddleware;
