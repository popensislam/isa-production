import { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { ReducersMapObject } from '@reduxjs/toolkit';

interface StoreProviderProps {
    children?: ReactNode
    initialState?: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider = ({ children, initialState, asyncReducers }: StoreProviderProps) => {

  const navigate = useNavigate();

  const store = createReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>,
    navigate
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
