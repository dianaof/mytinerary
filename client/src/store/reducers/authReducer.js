import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from "../actions/types.js";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: false,
  user: null
};

export default function registerReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case USER_LOADED:
      console.log(action.payload);

      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload
      };

    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      console.log(action.payload.token);

      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload.user
      };

    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      console.log("FAILS", action.type);
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false
      };
    default:
      return state;
  }
}
