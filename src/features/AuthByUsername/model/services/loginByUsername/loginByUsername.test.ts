import { loginByUsername } from './loginByUsername';

import axios from 'axios';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/TestAsyncThunk';


jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername', () => {

  test('login fullfilled', async () => {
    const response = { username: '123', id: '1' };
    mockedAxios.post.mockResolvedValueOnce({ data: { data: response, } });

    const thunk = new TestAsyncThunk(loginByUsername);

    const result = await thunk.callThunk({ username: '123', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(response));
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.payload).toEqual(response);
    expect(result.meta.requestStatus).toBe('fulfilled');
  });

  test('login rejected', async () => {
    mockedAxios.post.mockResolvedValueOnce({ status: 403 });

    const thunk = new TestAsyncThunk(loginByUsername);

    const result = await thunk.callThunk({ username: '123', password: '123' });

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.payload).toEqual('Error');
    expect(result.meta.requestStatus).toBe('rejected');
  });

  // let dispatch: Dispatch;
  // let getState: () => StateSchema;

  // beforeEach(() => {
  //   dispatch = jest.fn();
  //   getState = jest.fn();
  // });

  // test('login fulfilled', async () => {
  //   const response = { username: '123', id: '1' };
  //   mockedAxios.post.mockResolvedValueOnce({ data: { data: response, } });

  //   const action = loginByUsername({ username: '123', password: '123' });
  //   const result = await action(dispatch, getState, undefined);

  // expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(response));
  // expect(mockedAxios.post).toHaveBeenCalled();
  // expect(result.payload).toEqual(response);
  // expect(result.meta.requestStatus).toBe('fulfilled');
  // });

  // test('login rejected', async () => {
  //   mockedAxios.post.mockResolvedValueOnce({ status: 403 });

  //   const action = loginByUsername({ username: '123', password: '123' });
  //   const result = await action(dispatch, getState, undefined);

  //   expect(mockedAxios.post).toHaveBeenCalled();
  //   expect(dispatch).toHaveBeenCalledTimes(2);
  //   expect(result.payload).toEqual('Error');
  //   expect(result.meta.requestStatus).toBe('rejected');
  // });
});
