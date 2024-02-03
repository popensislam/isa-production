import MainPage from './MainPage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import 'app/styles/index.scss';

export default {
  title: 'pages/MainPage',
  component: MainPage,
  argTypes: { backgroundColor: { control: 'color' }, },
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = () => <MainPage />;


export const Light = Template.bind({});
Light.decorators = [ ThemeDecorator(Theme.LIGHT), StoreDecorator({}) ];

export const Dark = Template.bind({});
Dark.decorators = [ ThemeDecorator(Theme.DARK), StoreDecorator({}) ];
