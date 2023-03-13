import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import type { StateSchema } from './StateSchema';


export function createReduxStore(initialState?: StateSchema) {
  
  const rootReducers: ReducersMapObject<StateSchema> = {
    user: userReducer,
    counter: counterReducer
  }
  
  return configureStore<StateSchema>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState
  });
}

export const store = configureStore({ reducer: {}, });

export type AppDispatch = typeof store.dispatch
