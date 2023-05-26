import { createReducerManager } from './reducerManager';
import { userReducer } from 'entities/User';
import { configureStore } from '@reduxjs/toolkit';
import { $api } from 'shared/api/api';
import type { ReducersMapObject, CombinedState, Reducer } from '@reduxjs/toolkit';
import type { StateSchema, ThunkExtraArg } from './StateSchema';
import type { To, NavigateOptions } from 'react-router-dom';


export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void
) {

  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const extraArg: ThunkExtraArg = { api: $api, navigate };

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: { extraArgument: extraArg } })
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
