import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss';

export default {
  title: 'shared/ArticleDetailsPageHeader',
  component: ArticleDetailsPageHeader,
  argTypes: { backgroundColor: { control: 'color' }, },
} as ComponentMeta<typeof ArticleDetailsPageHeader>;

const Template: ComponentStory<typeof ArticleDetailsPageHeader> = (...args) => <ArticleDetailsPageHeader />;
