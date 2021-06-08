import { getServers } from './actions';
import { createReducer } from '@reduxjs/toolkit';

export const initialState = {
  servers: [],
  isServersLoaded: false,
  favoriteOffers: [],
}

const serversData = createReducer(initialState, (builder) => {
  builder.addCase(getServers, (state, action) => {
    state.servers = action.payload;
    state.isOffersLoaded = true;
  })
})

export default serversData;