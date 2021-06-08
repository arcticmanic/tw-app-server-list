import {
  clearCurrentOffer,
  getCurrentServer,
} from './actions';
import { createReducer } from '@reduxjs/toolkit';

export const initialState = {
  currentServer: null,
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