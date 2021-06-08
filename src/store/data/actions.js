import { createAction } from '@reduxjs/toolkit';

export const ActionType = {
  LOAD_SERVERS: `data/loadServers`,
}

export const getServers = createAction(ActionType.LOAD_SERVERS, (servers) => ({
  payload: servers,
}))