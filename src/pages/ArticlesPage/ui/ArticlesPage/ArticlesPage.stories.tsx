import ArticlesPage from './ArticlesPage';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss';

export default {
  title: 'pages/ArticlesPage',
  component: ArticlesPage,
  argTypes: { backgroundColor: { control: 'color' }, },
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = () => <ArticlesPage />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [ StoreDecorator({}) ];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ StoreDecorator({}) ];
