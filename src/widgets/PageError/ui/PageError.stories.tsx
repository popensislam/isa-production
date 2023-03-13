import { PageError } from './PageError';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'widgets/PageError',
  component: PageError,
  argTypes: { backgroundColor: { control: 'color' }, },
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />;


export const Light = Template.bind({});
Light.decorators = [ ThemeDecorator(Theme.LIGHT) ];

export const Dark = Template.bind({});
Dark.decorators = [ ThemeDecorator(Theme.DARK) ];
