import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername';
import { profileReducer } from 'entities/Profile';
import type { ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import type { Story } from '@storybook/react';

const defaultAsyncReducers: ReducerList = { loginForm: loginReducer, profile: profileReducer };

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: ReducerList) => {

  // eslint-disable-next-line react/display-name
  return (Story: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
      <Story/>
    </StoreProvider>
  );
};
