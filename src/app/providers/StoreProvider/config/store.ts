import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { configureStore } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUsername';
import type { ReducersMapObject } from '@reduxjs/toolkit';
import type { StateSchema } from './StateSchema';


export function createReduxStore(initialState?: StateSchema) {

  const rootReducers: ReducersMapObject<StateSchema> = {
    user: userReducer,
    counter: counterReducer,
    loginForm: loginReducer,
  };

  return configureStore<StateSchema>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState
  });
}

export const store = configureStore({ reducer: {}, });

export type AppDispatch = typeof store.dispatch
