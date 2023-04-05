import { LoginForm } from './LoginForm';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: { backgroundColor: { control: 'color' }, },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = () => <LoginForm />;

export const Light = Template.bind({});
Light.decorators = [ ThemeDecorator(Theme.LIGHT), StoreDecorator({ loginForm: { username: '123', password: '123' } }) ];

export const Dark = Template.bind({});
Dark.decorators = [ ThemeDecorator(Theme.DARK), StoreDecorator({ loginForm: { username: '123', password: '123' } }) ];

export const withError = Template.bind({});
withError.decorators = [ ThemeDecorator(Theme.LIGHT), StoreDecorator({ loginForm: { username: '123', password: '123', error: 'Error' } }) ];

export const isLoading = Template.bind({});
isLoading.decorators = [ ThemeDecorator(Theme.LIGHT), StoreDecorator({ loginForm: { username: '123', password: '123', isLoading: true } }) ];
