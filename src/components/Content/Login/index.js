import './style.scss';
import { useSelector, useDispatch } from 'react-redux';
import {
  loginInputChange, login,
} from 'src/actions';
import LogForm from './LogForm';

// == Composant
const Login = () => {
  const {
    email, password, logged,
  } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <LogForm
      email={email}
      password={password}
      isLogged={logged}
      handleLogin={() => {
        const action = login();
        dispatch(action);
      }}
      changeField={(text, inputName) => {
        const action = loginInputChange({
          [inputName]: text,
        });
        dispatch(action);
      }}
    />

  );
};

// == Export
export default Login;
