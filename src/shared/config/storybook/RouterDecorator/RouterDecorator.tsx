import { BrowserRouter } from 'react-router-dom';
import type { Story } from '@storybook/api';


export const RouterDecorator = (story: () => Story) => (
  <BrowserRouter>
    {story()}
  </BrowserRouter>
);
