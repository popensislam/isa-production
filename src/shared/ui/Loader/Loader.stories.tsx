import { Loader } from './Loader';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss';

export default {
  title: 'shared/Loader',
  component: Loader,
  argTypes: { backgroundColor: { control: 'color' }, },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = () => <Loader />;


export const Light = Template.bind({});
Light.decorators = [ ThemeDecorator(Theme.LIGHT) ];


export const Dark = Template.bind({});
Dark.decorators = [ ThemeDecorator(Theme.DARK) ];
