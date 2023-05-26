import { CountrySelect } from './CountrySelect';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import 'app/styles/index.scss';

export default {
  title: 'shared/CountrySelect',
  component: CountrySelect,
  argTypes: { backgroundColor: { control: 'color' }, },
  args: { to: '/' }
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = (args) => <CountrySelect {...args} />;


export const Primary = Template.bind({});
