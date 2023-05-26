import { Avatar } from './Avatar';
import AvaImg from './21486.jpg';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import 'app/styles/index.scss';

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: { backgroundColor: { control: 'color' }, },
  args: { to: '/' }
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;


export const Primary = Template.bind({});
Primary.decorators = [ ThemeDecorator(Theme.LIGHT) ];

Primary.args = { size: 150, src: AvaImg, alt: 'Example' };
