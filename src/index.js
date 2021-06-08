import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import App from './containers/App';
import rootReducer from './store/root-reducer';
import { createApi } from './api/api';
import browserHistory from './browser-history';
import { fetchData } from './store/data/api-actions';
import { Router } from 'react-router-dom';

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

console.log(store);

store.dispatch(fetchData());

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
