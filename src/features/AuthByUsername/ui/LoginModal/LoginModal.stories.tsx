import { LoginModal } from './LoginModal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
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
Light.decorators = [ ThemeDecorator(Theme.LIGHT), StoreDecorator({ loginForm: { username: '123', password: '123' } }) ];


Light.args = { isOpen: true };

export const Dark = Template.bind({});
Dark.decorators = [ ThemeDecorator(Theme.DARK), StoreDecorator({ loginForm: { username: '123', password: '123' } }) ];

Dark.args = { isOpen: true };
