import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { Profile, ProfileSchema } from '../types/ProfileSchema';

const initialState: ProfileSchema = {
  isLoading: false,
  error: undefined,
  profile: undefined,
  readonly: true
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
        state.isLoading = false;
        state.profile = action.payload;
      })
      .addCase(fetchProfileData.rejected, (state, action: PayloadAction<string>) => {
        state.isLoading = false,
        state.error = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
