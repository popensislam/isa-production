import { loginByUsername } from './loginByUsername';

import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/TestAsyncThunk';


describe('loginByUsername', () => {

  test('login fullfilled', async () => {
    // const response = { username: '123', id: '1' };

    // const thunk = new TestAsyncThunk(loginByUsername);

    // const result = await thunk.callThunk({ username: '123', password: '123' });

    // expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(response));
    // expect(thunk.api.post).toHaveBeenCalled();
    // expect(result.payload).toEqual(response);
    // expect(result.meta.requestStatus).toBe('fulfilled');

    const userValue = { id: '1', username: '123', password: '123' };

    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue, message: 'success' }));
    const result = await thunk.callThunk({ username: '123', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userValue);
  });

  test('login rejected', async () => {

    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk({ username: '123', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('Error');
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
