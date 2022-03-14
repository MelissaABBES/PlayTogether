import {
  LOGIN_INPUT_CHANGE,
  LOGIN_SUCCESS,
  RECEIVED_USER_INFO,
  RECEIVED_GAMES_INFOS,
  FETCH_GAMES_INFOS,
  DISPLAY_PARAMS,
  DISPLAY_MOBIL_MENU,
  USER_PROFIL_INPUT_CHANGE,
  USER_PROFIL_INFO_SUCCESS,
  USER_INPUT_CHANGE,
  USER_INFO_SUCCESS,
  RECEIVED_USER_GAMES,
  RECEIVED_USER_PLAYERS,
  FETCH_USERS,
  RECEIVED_USERS,
  CLOUDINARY_PICTURE_GET,
  LOGOUT,
  ADD_FAVORITES_GAMES_SUCCES,
  CHANGE_INPUT_VALUE,
  SAVE_USER,
  SAVE_CURRENT_GAME_ID,
  SAVE_CURRENT_PLAYER_ID,
  GAME_ALREADY_IN_FAVORITES,
  REMOVE_FAVORITES_GAMES,
  FETCH_USERS_BY_GAME_SUCCES,
  VISIBLE_INFO,
  VISIBLE_GAME,
  VISIBLE_PLAYER,
  VISIBLE_OTHER_GAME,
  RECEIVED_SIMILAR_GAMES,
  FETCH_SIMILAR_GAMES,
  RECEIVED_SIMILAR_GAMES_SUCCESS,
  RECEIVED_ALL_PLAYER_GAMES,
  ADD_FAVORITE_PLAYER_SUCCESS,
  REMOVE_FAVORITE_PLAYER_SUCCESS,
  DISPLAY_ADD_GAME_MODALE,
  UPDATE_GAME_INFOS_SUCCES,
} from '../actions';

const stateInitial = {
  logged: false,
  visible: false,
  mobilVisible: false,
  infosVisible: true,
  gamesVisible: false,
  playersVisible: false,
  otherGamesVisible: false,
  user: {
    email: 'bannanas@mail.com',
    password: '1234',
    password2: '',
    pseudo: '',
    birthdate: '',
    nationality: '',
    logged: false,
    accessToken: '',
    settings: [],
    favoritesGames: [],
    favoritesPlayers: [],
    similarGames: [],
    otherGames: [],
    loadingSGame: false,
    loadingOGame: false,
  },
  games: {},
  currentGameId: null,
  currentPlayerId: null,
  gameAlreadyInFavorites: false,
  usersByGame: [],
  displayModale: false,
};

export default (state = stateInitial, action = {}) => {
  switch (action.type) {
    case REMOVE_FAVORITE_PLAYER_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          favoritesPlayers: action.payload,
        },
      };
    case ADD_FAVORITE_PLAYER_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          favoritesPlayers: action.payload,
        },
      };
    case RECEIVED_ALL_PLAYER_GAMES:
      return {
        ...state,
        user: {
          ...state.user,
          otherGames: action.payload,
          loadingOGame: !state.loadingOGame,
        },
      };
    case SAVE_CURRENT_PLAYER_ID:
      return {
        ...state,
        currentPlayerId: action.payload,
      };
    case FETCH_SIMILAR_GAMES:
      return {
        ...state,
      };
    case RECEIVED_SIMILAR_GAMES:
      return {
        ...state,
        user: {
          ...state.user,
          similarGames: action.payload,
          loadingSGame: !state.loadingSGame,
        },
      };
    case RECEIVED_SIMILAR_GAMES_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          similarGames: action.payload,
        },
      };
    case VISIBLE_OTHER_GAME:
      return {
        ...state,
        infosVisible: false,
        gamesVisible: false,
        otherGamesVisible: !state.otherGamesVisible,
      };
    case VISIBLE_INFO:
      return {
        ...state,
        infosVisible: !state.infosVisible,
        gamesVisible: false,
        playersVisible: false,
        otherGamesVisible: false,
      };
    case VISIBLE_GAME:
      return {
        ...state,
        gamesVisible: !state.gamesVisible,
        infosVisible: false,
        playersVisible: false,
        otherGamesVisible: false,
      };
    case VISIBLE_PLAYER:
      return {
        ...state,
        playersVisible: !state.playersVisible,
        infosVisible: false,
        gamesVisible: false,
      };
    case CLOUDINARY_PICTURE_GET:
      return {
        ...state,
        user: {
          ...state.user,
          settings: [
            ...state.user.settings,
            ...action.payload,
          ],
        },
      };
    case ADD_FAVORITES_GAMES_SUCCES:
      return {
        ...state,
        ...action.payload,
      };
    case REMOVE_FAVORITES_GAMES:
      return {
        ...state,
      };
    case GAME_ALREADY_IN_FAVORITES:
      return {
        ...state,
        gameAlreadyInFavorites: !state.gameAlreadyInFavorites,
      };
    // case FETCH_USERS_BY_GAME:
    //   return {
    //     ...state,
    //     usersByGame: action.payload,
    //   };
    case FETCH_USERS_BY_GAME_SUCCES:
      return {
        ...state,
        usersByGame: action.payload,
      };
    case RECEIVED_USER_PLAYERS:
      return {
        ...state,
        user: {
          ...state.user,
          favoritesPlayers: action.payload,
        },
      };
    case RECEIVED_USER_GAMES:
      return {
        ...state,
        user: {
          ...state.user,
          favoritesGames: action.payload,
        },
      };
    case RECEIVED_USER_INFO:
      return {
        ...state,
        user: {
          settings: action.payload,
        },
      };
    case RECEIVED_GAMES_INFOS:
      return {
        ...state,
        games: action.payload,
      };
    case FETCH_GAMES_INFOS:
      return {
        ...state,
      };
    case SAVE_CURRENT_GAME_ID:
      return {
        ...state,
        currentGameId: action.payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        user: {
          email: '',
          password: '',
          logged: !state.logged,
        },
      };
    case LOGIN_INPUT_CHANGE:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };
    case LOGOUT:
      return {
        ...state,
        logged: !state.logged,
      };
    case DISPLAY_PARAMS:
      return {
        ...state,
        visible: !state.visible,
      };
    case DISPLAY_MOBIL_MENU:
      return {
        ...state,
        mobilVisible: !state.mobilVisible,
      };
    case DISPLAY_ADD_GAME_MODALE:
      return {
        ...state,
        displayModale: !state.displayModale,
      };
    case USER_INPUT_CHANGE:
      return {
        ...state,
        user: {
          ...state.user,
          settings: {
            ...state.user.settings,
            ...action.payload,
          },
        },
      };
    case USER_INFO_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          settings: {
            ...action.payload,
          },
        },
      };
    case USER_PROFIL_INPUT_CHANGE:
      return {
        ...state,
        user: {
          ...state.user,
          settings: {
            ...state.user.settings,
            ...action.payload,
          },
        },
      };
    case USER_PROFIL_INFO_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          settings: {
            ...action.payload,
          },
        },
      };
    case FETCH_USERS:
      return {
        ...state,
      };
    case RECEIVED_USERS:
      return {
        ...state,
        users: action.payload,
      };

    case CHANGE_INPUT_VALUE:
      return {

        ...state,
        user: {
          ...state.user,
          [action.payload.key]: action.payload.value,
        },

      };

    case SAVE_USER:
      return {
        ...state,
        user: {
          ...action.payload,
          email: '',
          password: '',
          password2: '',
          pseudo: '',
          birthdate: '',
          nationality: '',
        },
      };
    case UPDATE_GAME_INFOS_SUCCES:
      return {
        ...state,
        user: {
          favoritesGames: {
            ...action.payload,
          },
        },
      };
    default:
      return state;
  }
};
