import { Card } from './Card';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss';

export default {
  title: 'shared/Card',
  component: Card,
  argTypes: { backgroundColor: { control: 'color' }, },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Normal = Template.bind({});
Normal.args = { children: <h2>Title</h2> };
