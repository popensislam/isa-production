import { Text, TextSize, TextTheme } from './Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: { backgroundColor: { control: 'color' }, },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (...args) => <Text {...args[ 0 ]}/>;

export const PrimaryLight = Template.bind({});
PrimaryLight.args = { title: 'Some text title', text: 'Some text' };
PrimaryLight.decorators = [ ThemeDecorator(Theme.LIGHT) ];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = { title: 'Some text title', text: 'Some text' };
PrimaryDark.decorators = [ ThemeDecorator(Theme.DARK) ];

export const OnlyTitleLight = Template.bind({});
OnlyTitleLight.args = { title: 'Some text title' };
OnlyTitleLight.decorators = [ ThemeDecorator(Theme.LIGHT) ];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = { title: 'Some text title' };
OnlyTitleDark.decorators = [ ThemeDecorator(Theme.DARK) ];

export const OnlyTextLight = Template.bind({});
OnlyTextLight.args = { text: 'Some text title' };
OnlyTextLight.decorators = [ ThemeDecorator(Theme.LIGHT) ];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = { text: 'Some text title' };
OnlyTextDark.decorators = [ ThemeDecorator(Theme.DARK) ];

export const Error = Template.bind({});
Error.args = { title: 'Error text', text: 'Some text text', theme: TextTheme.ERROR };

export const SizeL = Template.bind({});
SizeL.args = { title: 'Some title', text: 'Some text', size: TextSize.L };

export const SizeM = Template.bind({});
SizeM.args = { title: 'Some title', text: 'Some text', size: TextSize.M };
