import { CountryType } from 'entities/Country/model/types/Country';
import { CurrencyType } from 'entities/Currency/model/types/Currency';

export interface ProfileSchema {
  profile?: Profile,
  form?: Profile,
  isLoading: boolean,
  error?: string,
  readonly: boolean
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
