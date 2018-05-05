import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

// Build the middleware for:
// 1. Redux Thunk
// 2. Intercepting and dispatching navigation actions
const history = createHistory();
const middleware = [
  thunk,
  routerMiddleware(history)
];

const store = createStore(
  combineReducers({
    ...rootReducer,
    routing: routerReducer
  }),
  applyMiddleware(middleware)
);

export default store;