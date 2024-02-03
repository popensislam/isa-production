import { fetchProfileData } from './fetchProfileData';

import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/TestAsyncThunk';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';


describe('fetchProfileData', () => {

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

    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: profile, message: 'success' }));
    const result = await thunk.callThunk('1');

    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(profile);
  });

  test('login rejected', async () => {

    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk('1');

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('Error');
  });
});
