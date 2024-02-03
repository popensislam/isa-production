import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername';
import { profileReducer } from 'entities/Profile';
import { articleDetailsReducer } from 'entities/Article';
import { articleDetailsPageReducers } from 'pages/ArticleDetailsPage';
import { uiReducer } from 'features/UI';
import type { ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import type { Story } from '@storybook/react';

const defaultAsyncReducers: ReducerList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  articleDetailsPage: articleDetailsPageReducers,
  ui: uiReducer
};

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
