import AddCommentForm from './AddCommentForm';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss';

export default {
  title: 'features/AddCommentForm',
  component: AddCommentForm,
  argTypes: { backgroundColor: { control: 'color' }, },
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => <AddCommentForm {...args} />;

export const Normal = Template.bind({});
Normal.args = { onSendComment: (text) => console.log(text) };

Normal.decorators = [ StoreDecorator({}) ];
