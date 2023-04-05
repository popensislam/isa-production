import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import type { DeepPartial } from '@reduxjs/toolkit';
import type { Story } from '@storybook/react';

export const StoreDecorator = (state: DeepPartial<StateSchema>) => {

  // eslint-disable-next-line react/display-name
  return (Story: Story) => (
    <StoreProvider initialState={state}>
      <Story/>
    </StoreProvider>
  );
};
