import { CommentList } from './CommentList';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss';

export default {
  title: 'shared/CommentList',
  component: CommentList,
  argTypes: { backgroundColor: { control: 'color' }, },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (...args) => <CommentList />;
