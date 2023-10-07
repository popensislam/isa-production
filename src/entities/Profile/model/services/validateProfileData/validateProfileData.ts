import { Profile, ValidateProfileErrors, ValidateProfileErrorsType } from '../../types/ProfileSchema';


export const validateProfileData = (profile?: Profile): ValidateProfileErrorsType[] => {

  if (!profile) return [ ValidateProfileErrors.NO_DATA ];

  const { first, lastname, age, country } = profile;

  const validateErrors: ValidateProfileErrorsType[] = [];

  if (!first || !lastname) validateErrors.push(ValidateProfileErrors.INCORRECT_USER_DATA);

  if (!age || !Number.isInteger(age)) validateErrors.push(ValidateProfileErrors.INCORRECT_AGE);

  if (!country) validateErrors.push(ValidateProfileErrors.INCORRECT_COUNTRY);

  return validateErrors;
};
