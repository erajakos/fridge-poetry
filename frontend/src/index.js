import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import history from './history'
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers/index';

import './styling/App.css';
import Home from './components/Home';
import CategorySelector from './containers/CategorySelector';
import Game from './components/Game';

// Build the middleware for:
// 1. Redux Thunk
// 2. Intercepting and dispatching navigation actions
const middleware = [
  thunk,
  routerMiddleware(history)
];

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div id="App">
        <Route exact path="/" component={Home}/>
        <Route exact path="/select-category" component={CategorySelector}/>
        <Route exact path="/game" component={Game}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
