// src/redux/reducers/userReducer.js
import { SET_AUTH, LOGOUT } from './userActions';

const initialState = {
  auth: false,
  stayConnected: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        auth: action.payload.authed,
        stayConnected: action.payload.stayConnected,
      };
    case LOGOUT:
      return {
        ...state,
        auth: false,
        stayConnected: false,
      };
    default:
      return state;
  }
};

export default userReducer;
