import { LOGIN_INPUT_CHANGE } from 'src/actions';
import { CHANGE_FIELD } from 'src/actions/index';
const stateInitial = {
  inputTextLogin: '',
  user: {
    email: '',
    password: '',
    pseudo: '',
    date: '',
  },
};

export default (state = stateInitial, action = {}) => {
  switch (action.type) {
    case LOGIN_INPUT_CHANGE:
      return {
        ...state,
        user: {
          ...state.user,
          // L'objet qui se trouve dans action.payload
          // contient soit: email: "truc" ou alors password: 'machin'
          ...action.payload,
          // email: 'truc'
        },
      };
    default:
      return state;
  }
};

//const reducer = (state = stateInitial, action = {}) => {
//  switch (action.type) {
//    case CHANGE_FIELD: {
//      return {
//        ...state,
//        user:{ ...state.user,
//        [action.payload.key]: action.payload.value},
//      }; 
//  }
//  default:
//    return state;
//};


//export default reducer;
