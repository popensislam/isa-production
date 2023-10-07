import { getProfileIsLoading } from './getProfileIsLoading';
import type { StateSchema } from 'app/providers/StoreProvider';

describe('getProfileIsLoading', () => {
  test('should return boolean loading', () => {
    const state: DeepPartial<StateSchema> = { profile: { isLoading: true }, };

    expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
  });

  test('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined);
  });
});
