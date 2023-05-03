import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername';
import { profileReducer } from 'entities/Profile';
import type { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import type { Story } from '@storybook/react';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = { loginForm: loginReducer, profile: profileReducer };

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>) => {

  // eslint-disable-next-line react/display-name
  return (Story: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
      <Story/>
    </StoreProvider>
  );
};
