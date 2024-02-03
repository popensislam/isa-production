import { Tabs } from './Tabs';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss';

export default {
  title: 'shared/Tabs',
  component: Tabs,
  argTypes: { backgroundColor: { control: 'color' }, },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (...args) => <Tabs {...args[ 0 ]}/>;

export const Normal = Template.bind({});
Normal.args = {
  value: 'Tab 1',
  tabs: [
    {
      value: 'Tab 1',
      content: 'Tab 1'
    }, {
      value: 'Tab 2',
      content: 'Tab 2'
    }, {
      value: 'Tab 2',
      content: 'Tab 2'
    }
  ]
};
Normal.decorators = [ ThemeDecorator(Theme.LIGHT) ];
