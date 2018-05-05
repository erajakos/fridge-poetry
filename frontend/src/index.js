import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './styling/App.css';
import Home from './components/Home';

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
  applyMiddleware(...middleware)
);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <ConnectedRouter history={history}>
        <div id="App">
          <Route exact path="/" component={Home}/>
        </div>
      </ConnectedRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
