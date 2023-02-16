import { Story } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => {


  // eslint-disable-next-line react/display-name
  return (Story: Story) => (
    <div className={`app ${theme}`}>
      <Story/>
    </div>
  );
};
