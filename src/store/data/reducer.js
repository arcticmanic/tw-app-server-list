import { getServers, updateServer } from './actions';
import { createReducer } from '@reduxjs/toolkit';

export const initialState = {
  servers: [],
  isServersLoaded: false,
};

const serversData = createReducer(initialState, (builder) => {
  builder.addCase(getServers, (state, action) => {
    state.servers = action.payload;
    state.isServersLoaded = true;
  });
  builder.addCase(updateServer, (state, action) => {
    state.servers = state.servers.map((server) => {
      return server.customer_id === action.payload.customer_id
        ? {
            ...server,
            server_name: action.payload.server_name,
            server_type: action.payload.server_type,
          }
        : server;
    });
  });
});

export default serversData;
