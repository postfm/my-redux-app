import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../constants';
import { userProcess } from './user-process/user-process';
import { pageProcess } from './page-process/page-process';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Page]: pageProcess.reducer,
});
