import { Select } from './Select';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import 'app/styles/index.scss';

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: { backgroundColor: { control: 'color' }, },
  args: { to: '/' }
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;


export const Primary = Template.bind({});
Primary.decorators = [ ThemeDecorator(Theme.LIGHT) ];

Primary.args = {
  label: 'Example select',
  options: [
    {
      value: '123',
      content: 'Option 1'
    }, {
      value: '321',
      content: 'Option 2'
    }
  ]
};
