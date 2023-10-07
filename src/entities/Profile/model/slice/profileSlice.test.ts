import { profileActions, profileReducer } from './profileSlice';
import { ProfileSchema, ValidateProfileErrors } from '../types/ProfileSchema';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';


describe('profile slice', () => {

  test('setReadonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };
    expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({ readonly: true });
  });

  test('updateProfile', () => {
    const state: DeepPartial<ProfileSchema> = { form: { lastname: '' } };
    expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({ lastname: 'John' }))).toEqual({ form: { lastname: 'John' } });
  });


  test('test update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = { isLoading: false, validateErrors: [ ValidateProfileErrors.INCORRECT_AGE ] };
    expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({ isLoading: true, validateErrors: undefined });
  });

  test('test update profile service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = { isLoading: true, readonly: false, validateErrors: [ ValidateProfileErrors.INCORRECT_AGE ] };
    expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled)).toEqual({ isLoading: false, validateErrors: undefined, readonly: true });
  });
});
