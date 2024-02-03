import ArticlesEditPage from './ArticleEditPage';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss';

export default {
  title: 'pages/ArticlesEditPage',
  component: ArticlesEditPage,
  argTypes: { backgroundColor: { control: 'color' }, },
} as ComponentMeta<typeof ArticlesEditPage>;

const Template: ComponentStory<typeof ArticlesEditPage> = (...args) => <ArticlesEditPage />;
