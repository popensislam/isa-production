import { Navbar } from './Navbar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'widgets/Navbar',
  component: Navbar,
  argTypes: { backgroundColor: { control: 'color' }, },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.decorators = [ ThemeDecorator(Theme.LIGHT), StoreDecorator({}) ];

export const Dark = Template.bind({});
Dark.decorators = [ ThemeDecorator(Theme.DARK), StoreDecorator({}) ];
