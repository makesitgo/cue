import { combineReducers, Reducer } from 'redux';
import { routerReducer } from 'react-router-redux';
import { AppState } from '../state';
// import { playersReducer } from './';

export const reducers: Reducer<AppState> = combineReducers({
  // players: playersReducer,
  routing: routerReducer
});
