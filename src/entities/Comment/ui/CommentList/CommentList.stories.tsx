import { CommentList } from './CommentList';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss';

export default {
  title: 'entities/CommentList',
  component: CommentList,
  argTypes: { backgroundColor: { control: 'color' }, },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  comments: [
    {
      user: {
        id: '1',
        username: 'Storybook'
      },
      id: '2',
      text: 'Storybook comment'
    }, {
      user: {
        id: '1',
        username: 'Storybook'
      },
      id: '4',
      text: 'Storybook comment 2'
    },
  ]
};

export const Loading = Template.bind({});
Loading.args = { isLoading: true };
