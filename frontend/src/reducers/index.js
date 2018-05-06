import { combineReducers } from 'redux';
import category from './category';
import word from './word';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  category,
  word,
  routing: routerReducer
});