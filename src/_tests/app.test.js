import React from 'react';
import ReactDOM from 'react-dom';
import App from '../containers/App';
import {fakeLocations} from './testData'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

import RootReducer from '../reducers/RootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  RootReducer,
  {},
  composeEnhancers(applyMiddleware(thunk))
);

it.skip('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
});
