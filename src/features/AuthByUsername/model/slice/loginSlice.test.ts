import { loginActions, loginReducer } from './loginSlice';
import { LoginSchema } from '../types/loginSchema';
import type { DeepPartial } from '@reduxjs/toolkit';


describe('login slice', () => {

  test('setUsername', () => {
    const state: DeepPartial<LoginSchema> = { username: '123' };

    expect(loginReducer(state as LoginSchema, loginActions.setUsername('123123'))).toEqual({ username: '123123' });
  });

  test('setPassword', () => {
    const state: DeepPartial<LoginSchema> = { password: '123' };

    expect(loginReducer(state as LoginSchema, loginActions.setPassword('123123'))).toEqual({ password: '123123' });
  });
});
