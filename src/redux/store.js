// src/redux/store.js
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension'; // Corrected import path for devtools
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  // Add other reducers here if needed
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)) // Compose middleware with Redux DevTools
);

export default store;
