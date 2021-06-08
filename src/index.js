import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import App from './containers/App';
import rootReducer from './store/root-reducer';
import { createApi } from './api/api';
import browserHistory from './browser-history';
import { getServers } from './store/data/actions';
import { Router } from 'react-router-dom';
import { data } from './mock/data';

import './index.css';

const api = createApi();

const store = configureStore({
  reducer: rootReducer,
  middleware: () => getDefaultMiddleware({
    thunk: {
      extraArgument: api
    }
  })
});

store.dispatch(getServers(data));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
