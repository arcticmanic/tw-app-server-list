import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import App from './containers/App';
import rootReducer from './store/root-reducer';
import { createApi } from './api/api';
import { getServers } from './store/data/actions';
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
    <App />
  </Provider>,
  document.getElementById('root')
);
