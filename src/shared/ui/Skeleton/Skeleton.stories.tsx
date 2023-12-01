import { Skeleton } from './Skeleton';
import { Theme } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'shared/Skeleton',
  component: Skeleton,
  argTypes: { backgroundColor: { control: 'color' }, },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (...args) => <Skeleton {...args[ 0 ]} />;

export const Normal = Template.bind({});
Normal.args = {
  width: '100%',
  height: 200
};

export const Circle = Template.bind({});
Circle.args = { border: '50%', width: 300, height: 300 };

export const CircleDark = Template.bind({});
CircleDark.args = { border: '50%', width: 300, height: 300 };
CircleDark.decorators = [ ThemeDecorator(Theme.DARK) ];

export const CircleLight = Template.bind({});
CircleLight.args = { border: '50%', width: 300, height: 300 };
CircleLight.decorators = [ ThemeDecorator(Theme.LIGHT) ];

export const CircleOrange = Template.bind({});
CircleOrange.args = { border: '50%', width: 300, height: 300 };
CircleOrange.decorators = [ ThemeDecorator(Theme.ORANGE) ];
