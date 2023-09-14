import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../constants';
const initialState = {
  year: 2018,
  photos: [],
};

export const pageProcess = createSlice({
  name: NameSpace.Page,
  initialState,
  reducers: {},
});
