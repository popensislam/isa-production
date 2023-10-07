import { getProfileReadonly } from './getProfileReadonly';
import type { StateSchema } from 'app/providers/StoreProvider';

describe('getProfileReadonly', () => {
  test('should return boolean readonly', () => {
    const state: DeepPartial<StateSchema> = { profile: { readonly: true }, };

    expect(getProfileReadonly(state as StateSchema)).toEqual(true);
  });

  test('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
  });
});
