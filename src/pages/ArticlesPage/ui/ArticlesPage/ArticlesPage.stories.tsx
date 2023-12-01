import ArticlesPage from './ArticlesPage';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss';

export default {
  title: 'pages/ArticlesPage',
  component: ArticlesPage,
  argTypes: { backgroundColor: { control: 'color' }, },
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (...args) => <ArticlesPage />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
