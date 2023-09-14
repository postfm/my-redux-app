import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../constants';

const initialState = {
  user: 'Аноним',
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
});
