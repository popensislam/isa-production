import { createReducerManager } from './reducerManager';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { configureStore } from '@reduxjs/toolkit';
import { $api } from 'shared/api/api';
import type { ReducersMapObject } from '@reduxjs/toolkit';
import type { StateSchema } from './StateSchema';
import type { To, NavigateOptions } from 'react-router-dom';


export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void
) {

  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer,
    counter: counterReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: { extraArgument: { api: $api, navigate } } })
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
