import { CountryType } from 'entities/Country/model/types/Country';
import { CurrencyType } from 'entities/Currency/model/types/Currency';


export const ValidateProfileErrors = {
  INCORRECT_USER_DATA: 'INCORRECT_USER_DATA',
  INCORRECT_AGE: 'INCORRECT_AGE',
  INCORRECT_COUNTRY: 'INCORRECT_COUNTRY',
  SERVER: 'SERVER ERROR',
  NO_DATA: 'NO DATA'
} as const;

export type ValidateProfileErrorsType = typeof ValidateProfileErrors[keyof typeof ValidateProfileErrors]
export interface ProfileSchema {
  profile?: Profile,
  form?: Profile,
  isLoading: boolean,
  error?: string,
  readonly: boolean
  validateErrors?: ValidateProfileErrorsType[]
}

export interface Profile {
  first?: string,
  lastname?: string,
  age?: number,
  currency?: CurrencyType,
  country?: CountryType,
  city?: string,
  username?: string,
  avatar?: string
}
