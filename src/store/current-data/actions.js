import { createAction } from '@reduxjs/toolkit';

export const ActionType = {
  LOAD_CURRENT_SERVER: `current/loadCurrentServer`,
  CLEAR_CURRENT_STATE: `current/clearCurrentState`,
};

export const getCurrentServer = createAction(
  ActionType.LOAD_CURRENT_SERVER,
  (server) => ({
    payload: server,
  })
);

export const clearCurrentOffer = createAction(ActionType.CLEAR_CURRENT_STATE);