/* eslint-disable no-case-declarations */
import axios from 'axios';
import {
  userProfilInfoSuccess, UPDATE_PROFIL_INFO_USER,
} from '../actions';

// TOUS TOUS TOUS les middlewares
// sont une triple fonction fléchée
const userProfilMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case UPDATE_PROFIL_INFO_USER:
      next(action);
      const user = store.getState().user.settings;
      const { accessToken } = store.getState();
      console.log(accessToken);
      axios({
        method: 'PATCH',
        url: `https://playtogether-back.herokuapp.com/user/${user.id}/updateinformations`,
        data: user,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((res) => {
          console.log(res.data);
          const actionUpdateProfil = userProfilInfoSuccess(res.data.datas);
          store.dispatch(actionUpdateProfil);
        })
        .catch((err) => {
          console.log(err);
        });
      break;
    default:
      next(action);
  }
};

export default userProfilMiddleware;
