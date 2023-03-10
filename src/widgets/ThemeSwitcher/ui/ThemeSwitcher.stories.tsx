import { ThemeSwitcher } from './ThemeSwitcher';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import 'app/styles/index.scss';

export default {
  title: 'shared/ThemeSwitcher',
  component: ThemeSwitcher,
  argTypes: { backgroundColor: { control: 'color' }, },
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />;


export const Light = Template.bind({});
Light.decorators = [ ThemeDecorator(Theme.LIGHT) ];

export const Dark = Template.bind({});
Dark.decorators = [ ThemeDecorator(Theme.DARK) ];
