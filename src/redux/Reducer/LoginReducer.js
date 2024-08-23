import { LOGIN, LOGOUT } from "../action";

export const loginInitialState = {
  user:undefined,
  isAuthenticated:false,
  token:"",
};

const LoginReducer = (state = loginInitialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user:action.user,
  isAuthenticated:action.isAuthenticated,
  token:action.token,
      };

    case LOGOUT:
      return {
        ...state,
        user:undefined,
        isAuthenticated:action.isAuthenticated,
        userToken:"",
      };

    default:
      return { ...state };
  }
};

export default LoginReducer;
