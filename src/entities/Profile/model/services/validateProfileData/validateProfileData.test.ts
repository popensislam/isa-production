import { validateProfileData } from './validateProfileData';

import { ValidateProfileErrors } from '../../types/ProfileSchema';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';


describe('fetchProfileData', () => {

  test('success validate', async () => {
    const profile = {
      first: 'Islam',
      lastname: 'Islam',
      age: 21,
      currency: Currency.RUB,
      country: Country.Kyrgyztan,
      city: 'Russia',
      username: 'popensisa',
    };

    expect(validateProfileData(profile)).toEqual([]);
  });

  test('no data validate', async () => {
    expect(validateProfileData(undefined)).toEqual([ ValidateProfileErrors.NO_DATA ]);
  });

  test('incorrect user data validate', () => {
    const profile = {
      first: '',
      lastname: '',
      age: 21,
      currency: Currency.RUB,
      country: Country.Kyrgyztan,
      city: 'Russia',
      username: 'popensisa',
    };
    expect(validateProfileData(profile)).toEqual([ ValidateProfileErrors.INCORRECT_USER_DATA ]);
  });

  test('incorrect age validate', () => {
    const profile = {
      first: 'Islam',
      lastname: 'iSALM',
      age: 0,
      currency: Currency.RUB,
      country: Country.Kyrgyztan,
      city: 'Russia',
      username: 'popensisa',
    };
    expect(validateProfileData(profile)).toEqual([ ValidateProfileErrors.INCORRECT_AGE ]);
  });

  test('incorrect country validate', () => {
    const profile = {
      first: 'Islam',
      lastname: 'iSALM',
      age: 21,
      currency: Currency.RUB,
      country: undefined,
      city: 'Russia',
      username: 'popensisa',
    };
    expect(validateProfileData(profile)).toEqual([ ValidateProfileErrors.INCORRECT_COUNTRY ]);
  });
});
