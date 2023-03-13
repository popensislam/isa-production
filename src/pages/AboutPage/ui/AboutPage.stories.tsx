import AboutPage from './AboutPage';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss';

export default {
  title: 'pages/AboutPage',
  component: AboutPage,
  argTypes: { backgroundColor: { control: 'color' }, },
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />;


export const Light = Template.bind({});
Light.decorators = [ ThemeDecorator(Theme.LIGHT) ];

export const Dark = Template.bind({});
Dark.decorators = [ ThemeDecorator(Theme.DARK) ];
