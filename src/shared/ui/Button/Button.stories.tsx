import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, ButtonSizes, ThemeButton } from './Button';

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

export const ClearInverted = Template.bind({});
ClearInverted.decorators = [ ThemeDecorator(Theme.LIGHT) ];

ClearInverted.args = { children: 'Button', theme: ThemeButton.INVERTED_CLEAR };

export const Outline = Template.bind({});
Outline.decorators = [ ThemeDecorator(Theme.LIGHT) ];

Outline.args = { children: 'Button', theme: ThemeButton.OUTLINE };

export const OutlineM = Template.bind({});
OutlineM.decorators = [ ThemeDecorator(Theme.LIGHT) ];

OutlineM.args = { children: 'Button', theme: ThemeButton.OUTLINE, size: ButtonSizes.M };

export const OutlineL = Template.bind({});
OutlineL.decorators = [ ThemeDecorator(Theme.LIGHT) ];

OutlineL.args = { children: 'Button', theme: ThemeButton.OUTLINE, size: ButtonSizes.L };

export const OutlineXL = Template.bind({});
OutlineXL.decorators = [ ThemeDecorator(Theme.LIGHT) ];

OutlineXL.args = { children: 'Button', theme: ThemeButton.OUTLINE, size: ButtonSizes.XL };

export const OutlineDark = Template.bind({});
OutlineDark.decorators = [ ThemeDecorator(Theme.DARK) ];

OutlineDark.args = { children: 'Button', theme: ThemeButton.OUTLINE };

export const Background = Template.bind({});
Background.decorators = [ ThemeDecorator(Theme.DARK) ];

Background.args = { children: 'Button', theme: ThemeButton.BACKGROUND };

export const BackgroundInverted = Template.bind({});
BackgroundInverted.decorators = [ ThemeDecorator(Theme.DARK) ];

BackgroundInverted.args = { children: 'Button', theme: ThemeButton.BACKGROUND_INVERTED };

export const SquareM = Template.bind({});
SquareM.decorators = [ ThemeDecorator(Theme.DARK) ];

SquareM.args = { children: '>', theme: ThemeButton.BACKGROUND_INVERTED, square: true, size: ButtonSizes.M };

export const SquareL = Template.bind({});
SquareL.decorators = [ ThemeDecorator(Theme.DARK) ];

SquareL.args = { children: '>', theme: ThemeButton.BACKGROUND_INVERTED, square: true, size: ButtonSizes.L };

export const SquareXL = Template.bind({});
SquareXL.decorators = [ ThemeDecorator(Theme.DARK) ];

SquareXL.args = { children: '>', theme: ThemeButton.BACKGROUND_INVERTED, square: true, size: ButtonSizes.XL };
