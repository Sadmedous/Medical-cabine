// src/redux/actions/userActions.js
export const SET_AUTH = 'SET_AUTH';
export const LOGOUT = 'LOGOUT';

export const authed = (payload) => ({
  type: SET_AUTH,
  payload,
});

export const logout = () => ({
  type: LOGOUT,
});
