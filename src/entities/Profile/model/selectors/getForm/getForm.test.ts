import { getForm } from './getForm';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import type { StateSchema } from 'app/providers/StoreProvider';

describe('getForm', () => {
  test('should return profile model', () => {
    const form = {
      first: 'Islam',
      lastname: 'Islam',
      age: 21,
      currency: Currency.RUB,
      country: Country.Kyrgyztan,
      city: 'Russia',
      username: 'popensisa',
    };
    const state: DeepPartial<StateSchema> = { profile: { form: form }, };

    expect(getForm(state as StateSchema)).toEqual(form);
  });

  test('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getForm(state as StateSchema)).toEqual(undefined);
  });
});
