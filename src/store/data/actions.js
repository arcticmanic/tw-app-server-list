import { createAction } from '@reduxjs/toolkit';

export const ActionType = {
  LOAD_SERVERS: 'data/loadServers',
  UPDATE_SERVER: 'data/updateServer',
};

export const getServers = createAction(ActionType.LOAD_SERVERS, (servers) => ({
  payload: servers,
}))

export const updateServer = createAction(ActionType.UPDATE_SERVER, (server) => ({
  payload: server,
}));