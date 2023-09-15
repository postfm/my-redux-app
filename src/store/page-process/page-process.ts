import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace, REFERENCE_YEAR, TPage } from '../../constants';
import { fetchPhotosAction } from './page-action';

const initialState: TPage = {
  year: REFERENCE_YEAR,
  photos: [],
  isFetching: false,
};

export const pageProcess = createSlice({
  name: NameSpace.Page,
  initialState,
  reducers: {
    setYearAction: (state, action: PayloadAction<number>) => {
      state.year = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPhotosAction.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(fetchPhotosAction.fulfilled, (state, action) => {
        state.isFetching = false;
        state.photos = action.payload;
      });
  },
});

export const { setYearAction } = pageProcess.actions;
