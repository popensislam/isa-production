import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: { backgroundColor: { control: 'color' }, },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.decorators = [ ThemeDecorator(Theme.LIGHT) ];

Light.args = { children: 'Dark mode', isOpen: true, };


export const Dark = Template.bind({});
Dark.decorators = [ ThemeDecorator(Theme.DARK) ];

Dark.args = { children: 'Dark mode', isOpen: true };
