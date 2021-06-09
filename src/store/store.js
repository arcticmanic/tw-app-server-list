import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './root-reducer';
import { createApi } from '../api/api';

const api = createApi();

export const store = configureStore({
  reducer: rootReducer,
  middleware: () =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
