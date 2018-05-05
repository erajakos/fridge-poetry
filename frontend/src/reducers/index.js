import { combineReducers } from 'redux';
import category from './category';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  category,
  routing: routerReducer
});