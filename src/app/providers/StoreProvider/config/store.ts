import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import type { StateSchema } from './StateSchema';


export function createReduxStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: { counter: counterReducer },
    devTools: __IS_DEV__,
    preloadedState: initialState
  });
}

export const store = configureStore({ reducer: {}, });


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
