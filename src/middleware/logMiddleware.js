import axios from 'axios';
import { LOGIN, loginSuccess} from 'src/actions';

const logMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN:
      const { user } = store.getState();
      console.log(user);
      axios({
        method: 'post',
        url: 'https://playtogether-back.herokuapp.com/login',
        data: user,
      })
        .then((res) => {
          const actionLoginSuccess = loginSuccess(res.data);
          store.dispatch(actionLoginSuccess);
          console.log(actionLoginSuccess);
        })
        .catch((err) => {
          console.log(err);
        });
      break;
    default:
      next(action);
  }
};

export default logMiddleware;
