import { getForm } from '../../selectors/getForm/getForm';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import type { Profile } from '../../types/ProfileSchema';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/updateProfileData',
  async (_, { extra, rejectWithValue, getState }) => {
    try {

      const formData = getForm(getState());

      const response = await extra.api.put<Profile>('/profile', formData);

      return response.data;
    } catch (error) {
      return rejectWithValue('Error');
    }
  }
);
