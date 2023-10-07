import { updateProfileData } from './updateProfileData';

import { ValidateProfileErrors } from '../../types/ProfileSchema';
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/TestAsyncThunk';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';


describe('updateProfileData', () => {

  test('fullfilled', async () => {

    const profile = {
      first: 'Islam',
      lastname: 'Islam',
      age: 21,
      currency: Currency.RUB,
      country: Country.Kyrgyztan,
      city: 'Russia',
      username: 'popensisa',
    };

    const thunk = new TestAsyncThunk(updateProfileData, { profile: { form: profile } });
    thunk.api.put.mockReturnValue(Promise.resolve({ data: profile }));
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(profile);
  });

  test('login rejected', async () => {

    const thunk = new TestAsyncThunk(updateProfileData);
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ ValidateProfileErrors.SERVER ]);
  });
});
