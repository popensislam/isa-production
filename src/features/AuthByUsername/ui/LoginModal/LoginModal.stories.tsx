import { LoginModal } from './LoginModal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss';

export default {
  title: 'features/LoginModal',
  component: LoginModal,
  argTypes: { backgroundColor: { control: 'color' }, },
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = (args) => <LoginModal {...args} />;

export const Light = Template.bind({});
Light.decorators = [ ThemeDecorator(Theme.LIGHT) ];

Light.args = { isOpen: true };

export const Dark = Template.bind({});
Dark.decorators = [ ThemeDecorator(Theme.DARK) ];

Dark.args = { isOpen: true };
