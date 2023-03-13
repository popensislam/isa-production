import { Input } from './Input';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss';

export default {
  title: 'shared/Input',
  component: Input,
  argTypes: { backgroundColor: { control: 'color' }, },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Light = Template.bind({});
Light.decorators = [ ThemeDecorator(Theme.LIGHT) ];

Light.args = { placeholder: 'Username' };

export const Dark = Template.bind({});
Dark.decorators = [ ThemeDecorator(Theme.DARK) ];

Dark.args = { placeholder: 'Username' };
