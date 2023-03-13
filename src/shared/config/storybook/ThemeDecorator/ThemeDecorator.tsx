import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';
import type { Story } from '@storybook/react';

export const ThemeDecorator = (theme: Theme) => {

  // eslint-disable-next-line react/display-name
  return (Story: Story) => (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <Story/>
      </div>
    </ThemeProvider>
  );
};
