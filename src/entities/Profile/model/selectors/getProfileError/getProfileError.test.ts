import { getProfileError } from './getProfileError';
import type { StateSchema } from 'app/providers/StoreProvider';

describe('getProfileError', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = { profile: { error: 'Error' }, };

    expect(getProfileError(state as StateSchema)).toEqual('Error');
  });

  test('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileError(state as StateSchema)).toEqual(undefined);
  });
});
