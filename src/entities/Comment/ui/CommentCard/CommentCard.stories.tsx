import { CommentCard } from './CommentCard';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss';

export default {
  title: 'shared/CommentCard',
  component: CommentCard,
  argTypes: { backgroundColor: { control: 'color' }, },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  comment: {
    user: {
      id: '1',
      username: 'Storybook'
    },
    id: '2',
    text: 'Storybook comment'
  }
};
