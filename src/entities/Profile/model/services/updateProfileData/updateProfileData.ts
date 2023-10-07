import { getForm } from '../../selectors/getForm/getForm';
import { Profile, ValidateProfileErrors, ValidateProfileErrorsType } from '../../types/ProfileSchema';
import { validateProfileData } from '../validateProfileData/validateProfileData';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileErrorsType[]>>(
  'profile/updateProfileData',
  async (_, { extra, rejectWithValue, getState }) => {
    try {

      const formData = getForm(getState());

      const errors = validateProfileData(formData);

      if (errors.length !== 0) {
        return rejectWithValue(errors);
      }

      const response = await extra.api.put<Profile>('/profile', formData);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      return rejectWithValue([ ValidateProfileErrors.SERVER ]);
    }
  }
);
