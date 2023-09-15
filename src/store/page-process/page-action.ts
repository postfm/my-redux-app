import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../state';

export type CombinedType = {
  dispatch: AppDispatch;
  state: RootState;
};

export const fetchPhotosAction = createAsyncThunk<string[], undefined, CombinedType>(
  'page/fetchPhotos',
  () => {
    const data = ['1', '2', '3', '4', '5'];

    return data;
  }
);
