import { ArticlePageFilters } from './ArticlePageFilters';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss';

export default {
  title: 'shared/ArticlePageFilters',
  component: ArticlePageFilters,
  argTypes: { backgroundColor: { control: 'color' }, },
} as ComponentMeta<typeof ArticlePageFilters>;

const Template: ComponentStory<typeof ArticlePageFilters> = (...args) => <ArticlePageFilters />;
