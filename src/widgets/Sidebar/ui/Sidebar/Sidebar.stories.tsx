import { Sidebar } from './Sidebar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'widgets/Sidebar',
  component: Sidebar,
  argTypes: { backgroundColor: { control: 'color' }, },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;


export const Light = Template.bind({});
Light.decorators = [ ThemeDecorator(Theme.LIGHT) ];

export const Dark = Template.bind({});
Dark.decorators = [ ThemeDecorator(Theme.DARK) ];
