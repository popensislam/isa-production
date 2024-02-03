import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import type { Reducer } from '@reduxjs/toolkit';
import type { ReduxStoreWithManager, StateSchema, StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';

export type ReducerList = {
  [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>
}

interface DynamicModuleLoaderProps {
  reducers: ReducerList,
  removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {

  const { children, reducers, removeAfterUnmount = true } = props;

  const dispatch = useDispatch();
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {

    const mounterReducers = store.reducerManager.getReducerMap();

    Object.entries(reducers).forEach(([ key, reducer ]) => {
      // Already exist
      if (mounterReducers[ key as StateSchemaKey ]) return;

      store.reducerManager.add(key as StateSchemaKey, reducer);
      dispatch({ type: `@INIT ${key} reducer` });
    });

    return () => {
      if (!removeAfterUnmount) return;
      Object.entries(reducers).forEach(([ key ]) => {
        store.reducerManager.remove(key as StateSchemaKey);
        dispatch({ type: `@DELETE ${key} reducer` });
      });

    };

    //eslint-disable-next-line
  }, []);

  return (
    <>
      {children}
    </>
  );
};
