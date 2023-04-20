import { getLoginState } from './getLoginState';
import type { DeepPartial } from '@reduxjs/toolkit';
import type { StateSchema } from 'app/providers/StoreProvider';

describe('getLoginState', () => {
  test('should return username, password, isLoading, error', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'Islam',
        password: 'Some',
        isLoading: false,
        error: '',
      },
    };

    expect(getLoginState(state as StateSchema)).toEqual({
      username: 'Islam',
      password: 'Some',
      isLoading: false,
      error: '',
    });
  });
});
