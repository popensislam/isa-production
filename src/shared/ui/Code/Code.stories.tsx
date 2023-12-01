import { Code } from './Code';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss';

export default {
  title: 'shared/Code',
  component: Code,
  argTypes: { backgroundColor: { control: 'color' }, },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;


export const Normal = Template.bind({});
Normal.args = { text: '<div> <h1>Stodyboock</h1> </div>' };
