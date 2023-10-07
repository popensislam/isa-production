import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileErrors } from '../../types/ProfileSchema';
import type { StateSchema } from 'app/providers/StoreProvider';

describe('getProfileValidateErrors', () => {
  test('should return boolean readonly', () => {
    const validateErrors = [ ValidateProfileErrors.INCORRECT_AGE, ValidateProfileErrors.INCORRECT_COUNTRY ];
    const state: DeepPartial<StateSchema> = { profile: { validateErrors: validateErrors }, };

    expect(getProfileValidateErrors(state as StateSchema)).toEqual(validateErrors);
  });

  test('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
