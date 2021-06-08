import {
  clearCurrentOffer,
  getCurrentServer,
} from './actions';
import { createReducer } from '@reduxjs/toolkit';

export const initialState = {
  currentServer: {
    customer_id: 'user1',
    server_name: 'server7',
    server_type: 'vds',
  },
};

const currentServerData = createReducer(initialState, (builder) => {
  builder.addCase(getCurrentServer, (state, action) => {
    state.currentServer = action.payload;
  });
  builder.addCase(clearCurrentOffer, (state) => {
    state.currentServer = null;
  });
});

export default currentServerData;