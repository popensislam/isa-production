import { CurrencySelect } from './CurrencySelect';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import 'app/styles/index.scss';

export default {
  title: 'shared/CurrencySelect',
  component: CurrencySelect,
  argTypes: { backgroundColor: { control: 'color' }, },
  args: { to: '/' }
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = (args) => <CurrencySelect {...args} />;


export const Primary = Template.bind({});
