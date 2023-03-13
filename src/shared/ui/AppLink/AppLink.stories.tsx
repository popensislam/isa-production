import { AppLink, AppLinkTheme } from './AppLink';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import 'app/styles/index.scss';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: { backgroundColor: { control: 'color' }, },
  args: { to: '/' }
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;


export const Primary = Template.bind({});
Primary.decorators = [ ThemeDecorator(Theme.LIGHT) ];

Primary.args = { children: 'AppLink', theme: AppLinkTheme.PRIMARY };

export const PrimaryDark = Template.bind({});
PrimaryDark.decorators = [ ThemeDecorator(Theme.DARK) ];

PrimaryDark.args = { children: 'AppLink', theme: AppLinkTheme.PRIMARY };

export const Secondary = Template.bind({});
Secondary.decorators = [ ThemeDecorator(Theme.LIGHT) ];

Secondary.args = { children: 'AppLink', theme: AppLinkTheme.SECONDARY };

export const SecondaryDark = Template.bind({});
SecondaryDark.decorators = [ ThemeDecorator(Theme.DARK) ];

SecondaryDark.args = { children: 'AppLink', theme: AppLinkTheme.SECONDARY };
