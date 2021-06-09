import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './pages/App';
import { store } from './store/store';
import { getServers } from './store/data/actions';
import { data } from './mock/data';

import './index.css';

store.dispatch(getServers(data));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
