import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducers';
import { logger } from 'redux-logger';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (middleware) => middleware().concat(logger),
});
