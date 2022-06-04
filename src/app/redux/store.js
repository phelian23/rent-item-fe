import { configureStore } from '@reduxjs/toolkit';
import { combineReducers, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import itemReducer from './reducers/itemReducer';
import userReducer from './reducers/userReducer';
import favouriteReducer from './reducers/favouriteReducer';

const reducer = combineReducers({
  items: itemReducer,
  user: userReducer,
  favourites: favouriteReducer,

  // Add other reducers here
});

const composed = compose(applyMiddleware(thunkMiddleware, logger));

const store = configureStore({ reducer, composed });

export default store;
