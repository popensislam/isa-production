import type { CountryType, CurrencyType } from 'shared/const/common';

export interface ProfileSchema {
  profile?: Profile,
  isLoading: boolean,
  error?: string,
  readonly: boolean
}

export interface Profile {
  first: string,
  lastname: string,
  age: number,
  currency: CurrencyType,
  country: CountryType,
  city: string,
  username: string,
  avatar: string
}
