import { <FTName | capitalize> } from './<FTName | capitalize>.tsx';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss';

export default {
  title: 'shared/<FTName | capitalize>',
  component: <FTName | capitalize>,
  argTypes: { backgroundColor: { control: 'color' }, },
} as ComponentMeta<typeof <FTName | capitalize>>;

const Template: ComponentStory<typeof <FTName | capitalize>> = (...args) => <<FTName | capitalize> />;
