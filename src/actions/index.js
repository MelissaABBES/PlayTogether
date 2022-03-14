// CONNEXION
export const LOGIN = 'LOGIN';
export const LOGIN_INPUT_CHANGE = 'LOGIN_INPUT_CHANGE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const CHECK_USER = 'CHECK_USER';
export const RECEIVED_USER_INFO = 'RECEIVED_USER_INFO';
export const LOGOUT = 'LOGOUT';
// UPDATE SETTINGS INFO USER
export const UPDATE_INFO_USER = 'UPDATE_INFO_USER';
export const USER_INPUT_CHANGE = 'USER_INPUT_CHANGE';
export const USER_INFO_SUCCESS = 'USER_INFO_SUCCESS';
// UPDATE PROFIL INFO USER
export const UPDATE_PROFIL_INFO_USER = 'UPDATE_PROFIL_INFO_USER';
export const USER_PROFIL_INPUT_CHANGE = 'USER_PROFIL_INPUT_CHANGE';
export const USER_PROFIL_INFO_SUCCESS = 'USER_PROFIL_INFO_SUCCESS';
// GET GAMES INFOS
export const RECEIVED_GAMES_INFOS = 'RECEIVED_GAMES_INFOS';
export const FETCH_GAMES_INFOS = 'FETCH_GAMES_INFOS';
// FAVORITE GAMES
export const FETCH_USER_GAMES = 'FETCH_USER_GAMES';
export const FETCH_USER_GAMES_SUCCESS = 'FETCH_USER_GAMES_SUCCESS';
export const RECEIVED_USER_GAMES = 'RECEIVED_USER_GAMES';
export const ADD_FAVORITES_GAMES = 'ADD_FAVORITES_GAMES';
export const ADD_FAVORITES_GAMES_SUCCES = 'ADD_FAVORITES_GAMES_SUCCES';
export const REMOVE_FAVORITES_GAMES = 'REMOVE_FAVORITES_GAMES';
export const REMOVE_FAVORITES_GAMES_SUCCES = 'REMOVE_FAVORITES_GAMES_SUCCES';
export const FETCH_USERS_BY_GAME = 'FETCH_USERS_BY_GAME';
export const FETCH_USERS_BY_GAME_SUCCES = 'FETCH_USERS_BY_GAME_SUCCES';
// FAVORITE PLAYERS
export const FETCH_USER_PLAYERS = 'FETCH_USER_PLAYERS';
export const FETCH_USER_PLAYERS_SUCCESS = 'FETCH_USER_PLAYERS_SUCCESS';
export const RECEIVED_USER_PLAYERS = 'RECEIVED_USER_PLAYERS';
export const ADD_FAVORITE_PLAYER = 'ADD_FAVORITE_PLAYER';
export const ADD_FAVORITE_PLAYER_SUCCESS = 'ADD_FAVORITE_PLAYER_SUCCESS';
export const REMOVE_FAVORITE_PLAYER = 'REMOVE_FAVORITE_PLAYER';
export const REMOVE_FAVORITE_PLAYER_SUCCESS = 'REMOVE_FAVORITE_PLAYER_SUCCESS';
// GET SAME GAMES
export const FETCH_SIMILAR_GAMES = 'FETCH_SIMILAR_GAMES';
export const RECEIVED_SIMILAR_GAMES = 'RECEIVED_SIMILAR_GAMES';
export const RECEIVED_SIMILAR_GAMES_SUCCESS = 'RECEIVED_SIMILAR_GAMES_SUCCESS';
export const SAVE_CURRENT_PLAYER_ID = 'SAVE_CURRENT_PLAYER_ID';
// GET ALL PLAYER GAMES
export const FETCH_ALL_PLAYER_GAMES = 'FETCH_ALL_PLAYER_GAMES';
export const RECEIVED_ALL_PLAYER_GAMES = 'RECEIVED_ALL_PLAYER_GAMES';
// CREATE USER
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const SAVE_USER = 'SAVE_USER';
export const CREATE_USER = 'CREATE_USER';
// STATE GLOBAL
export const DISPLAY_PARAMS = 'DISPLAY_PARAMS';
export const DISPLAY_MOBIL_MENU = 'DISPLAY_MOBIL_MENU';
export const SAVE_CURRENT_GAME_ID = 'SAVE_CURRENT_GAME_ID';
export const GAME_ALREADY_IN_FAVORITES = 'GAME_ALREADY_IN_FAVORITES';
export const VISIBLE_INFO = 'VISIBLE_INFO';
export const VISIBLE_GAME = 'VISIBLE_GAME';
export const VISIBLE_PLAYER = 'VISIBLE_PLAYER';
export const VISIBLE_OTHER_GAME = 'VISIBLE_OTHER_GAME';
export const DISPLAY_ADD_GAME_MODALE = 'DISPLAY_ADD_GAME_MODALE';

// UPDATE LEVEL PLATFORM GAMEPLAY BY GAME
export const UPDATE_GAME_INFOS = 'UPDATE_GAME_INFOS';
export const UPDATE_GAME_INFOS_SUCCES = 'UPDATE_GAME_INFOS_SUCCES';

// ENVOI ET RECEPTION DE L'IMAGE PROFIL
export const CLOUDINARY_PICTURE_POST = 'CLOUDINARY_PICTURE_SEND';
export const CLOUDINARY_PICTURE_GET = 'CLOUDINARY_PICTURE_GET';

// USERS
export const FETCH_USERS = 'FETCH_USERS';
export const RECEIVED_USERS = 'RECEIVED_USERS';

// CONNEXION

export const checkUser = () => ({ type: CHECK_USER });

export const login = () => ({
  type: LOGIN,
});

export const loginInputChange = (payload) => ({
  type: LOGIN_INPUT_CHANGE,
  payload,
});

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const receivedUserInfo = (payload) => ({
  type: RECEIVED_USER_INFO,
  payload,
});

export const logOut = () => ({
  type: LOGOUT,
});

// UPDATE SETTINGS INFO USER

export const updateinfoUser = () => ({
  type: UPDATE_INFO_USER,
});

export const userInputChange = (payload) => ({
  type: USER_INPUT_CHANGE,
  payload,
});

export const userInfoSuccess = (payload) => ({
  type: USER_INFO_SUCCESS,
  payload,
});

// UPDATE LEVEL PLATFORM GAMEPLAY BY GAME

export const updateGameInfos = () => ({
  type: UPDATE_GAME_INFOS,
});

// export const userProfilInputChange = (payload) => ({
//   type: USER_PROFIL_INPUT_CHANGE,
//   payload,
// });

export const updateGameInfosSucces = (payload) => ({
  type: UPDATE_GAME_INFOS_SUCCES,
  payload,
});

// UPDATE PROFIL INFO USER

export const updateProfilInfoUser = () => ({
  type: UPDATE_PROFIL_INFO_USER,
});

export const userProfilInputChange = (payload) => ({
  type: USER_PROFIL_INPUT_CHANGE,
  payload,
});

export const userProfilInfoSuccess = (payload) => ({
  type: USER_PROFIL_INFO_SUCCESS,
  payload,
});

// GET GAMES INFOS

export const fetchGamesInfos = () => ({
  type: FETCH_GAMES_INFOS,
});

export const receivedGamesInfos = (payload) => ({
  type: RECEIVED_GAMES_INFOS,
  payload,
});
// FAVORITE GAMES

export const fetchUserGames = () => ({
  type: FETCH_USER_GAMES,
});

export const fetchUserGamesSuccess = (payload) => ({
  type: FETCH_USER_GAMES_SUCCESS,
  payload,
});

export const ReceivedUserGames = (payload) => ({
  type: RECEIVED_USER_GAMES,
  payload,
});

export const addFavoritesGames = (payload) => ({
  type: ADD_FAVORITES_GAMES,
  payload,
});

export const addFavoritesGamesSucces = (payload) => ({
  type: ADD_FAVORITES_GAMES_SUCCES,
  payload,
});

export const removeFavoritesGames = () => ({
  type: REMOVE_FAVORITES_GAMES,
});

export const removeFavoritesGamesSucces = () => ({
  type: REMOVE_FAVORITES_GAMES_SUCCES,
});

export const fetchUsersByGame = () => ({
  type: FETCH_USERS_BY_GAME,
});

export const fetchUsersByGameSucces = (payload) => ({
  type: FETCH_USERS_BY_GAME_SUCCES,
  payload,
});

// GET SAME GAMES

export const fetchSimilarGame = () => ({
  type: FETCH_SIMILAR_GAMES,
});

export const receivedSimilarGames = (payload) => ({
  type: RECEIVED_SIMILAR_GAMES,
  payload,
});

export const receivedSimilarGamesSuccess = (payload) => ({
  type: RECEIVED_SIMILAR_GAMES_SUCCESS,
  payload,
});

export const saveCurrentPlayerId = (payload) => ({
  type: SAVE_CURRENT_PLAYER_ID,
  payload,
});

// GET ALL PLAYER GAMES

export const fetchAllPlayerGame = () => ({
  type: FETCH_ALL_PLAYER_GAMES,
});

export const receivedAllPlayerGames = (payload) => ({
  type: RECEIVED_ALL_PLAYER_GAMES,
  payload,
});

// FAVORITE PLAYERS

export const fetchUserPlayers = () => ({
  type: FETCH_USER_PLAYERS,
});

export const fetchUserPlayersSuccess = (payload) => ({
  type: FETCH_USER_PLAYERS_SUCCESS,
  payload,
});

export const ReceivedUserPlayers = (payload) => ({
  type: RECEIVED_USER_PLAYERS,
  payload,
});

export const AddFavoritePlayer = (payload) => ({
  type: ADD_FAVORITE_PLAYER,
  payload,
});

export const AddFavoritePlayerSuccess = (payload) => ({
  type: ADD_FAVORITE_PLAYER_SUCCESS,
  payload,
});

export const RemoveFavoritePlayer = () => ({
  type: REMOVE_FAVORITE_PLAYER,
});

export const RemoveFavoritePlayerSuccess = () => ({
  type: REMOVE_FAVORITE_PLAYER_SUCCESS,
});

// USERS
export const fetchUsers = () => ({
  type: FETCH_USERS,
});

export const receivedUsers = (payload) => ({
  type: RECEIVED_USERS,
  payload,
});

export const changeInputValue = (value, key) => ({
  type: CHANGE_INPUT_VALUE,
  payload: {
    value, key,
  },
});

export const saveUser = (payload) => ({
  type: SAVE_USER,
  payload,
});

export const createUser = () => ({
  type: CREATE_USER,
});

// STATE GLOBAL

export const displayParams = () => ({
  type: DISPLAY_PARAMS,
});

export const displayMobilMenu = () => ({
  type: DISPLAY_MOBIL_MENU,
});

export const saveCurrentGameId = (payload) => ({
  type: SAVE_CURRENT_GAME_ID,
  payload,
});

export const gameAlreadyInFavoritesSucces = () => ({
  type: GAME_ALREADY_IN_FAVORITES,
});

export const visibleInfo = () => ({
  type: VISIBLE_INFO,
});

export const visibleGame = () => ({
  type: VISIBLE_GAME,
});

export const visiblePlayer = () => ({
  type: VISIBLE_PLAYER,
});

export const visibleOtherGame = () => ({
  type: VISIBLE_OTHER_GAME,
});

export const displayAddGameModale = () => ({
  type: DISPLAY_ADD_GAME_MODALE,
});

// ENVOI ET RECEPTION De L'IMAGE PROFIL

export const cloudinaryPicturePost = (payload) => ({
  type: CLOUDINARY_PICTURE_POST,
  payload,
});

export const cloudinaryPictureGet = (payload) => ({
  type: CLOUDINARY_PICTURE_GET,
  payload,
});
