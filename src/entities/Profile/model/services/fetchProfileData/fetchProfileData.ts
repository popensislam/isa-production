import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import type { Profile } from '../../types/ProfileSchema';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (_, { extra, rejectWithValue }) => {
    try {
      const response = await extra.api.get<Profile>('/profile');

      return response.data;
    } catch (error) {
      return rejectWithValue('Error');
    }
  }
);
