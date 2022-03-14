import axios from 'axios';
import { saveUser, CREATE_USER } from 'src/actions';

const newUserMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CREATE_USER: {
      const {
        email, birthdate, password, pseudo, nationality,
      } = store.getState().user;

      axios({
        method: 'post',
        url: 'https://playtogether-back.herokuapp.com/user/new',
        data: {
          email, birthdate, password, pseudo, nationality,
        },
      })

        .then((res) => {
          console.log(res.data);
          // store.dispatch(saveUser(res.data));
          const saveUserAction = saveUser(res.data);
          store.dispatch(saveUserAction);
        })
        .catch((error) => console.log(error));

      break;
    }
    default:
      next(action);
  }
};
export default newUserMiddleware;
