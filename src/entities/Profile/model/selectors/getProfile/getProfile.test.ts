import { getProfile } from './getProfile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import type { StateSchema } from 'app/providers/StoreProvider';

describe('getProfile', () => {
  test('should return profile model', () => {
    const profile = {
      first: 'Islam',
      lastname: 'Islam',
      age: 21,
      currency: Currency.RUB,
      country: Country.Kyrgyztan,
      city: 'Russia',
      username: 'popensisa',
    };
    const state: DeepPartial<StateSchema> = { profile: { profile: profile }, };

    expect(getProfile(state as StateSchema)).toEqual(profile);
  });

  test('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfile(state as StateSchema)).toEqual(undefined);
  });
});
