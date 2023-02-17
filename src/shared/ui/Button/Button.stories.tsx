import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, ThemeButton } from './Button';

import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: { backgroundColor: { control: 'color' }, },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;


export const Clear = Template.bind({});
Clear.decorators = [ ThemeDecorator(Theme.LIGHT) ];

Clear.args = { children: 'Button', theme: ThemeButton.CLEAR };

export const Outline = Template.bind({});
Outline.decorators = [ ThemeDecorator(Theme.LIGHT) ];

Outline.args = { children: 'Button', theme: ThemeButton.OUTLINE };

export const OutlineDark = Template.bind({});
OutlineDark.decorators = [ ThemeDecorator(Theme.DARK) ];

OutlineDark.args = { children: 'Button', theme: ThemeButton.OUTLINE };
