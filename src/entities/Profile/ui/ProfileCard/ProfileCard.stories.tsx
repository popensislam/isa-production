import { ProfileCard } from './ProfileCard';
import Avatar from 'shared/assets/tests/21486.jpg';
import type { ComponentStory, ComponentMeta } from '@storybook/react';


import 'app/styles/index.scss';

export default {
  title: 'features/ProfileCard',
  component: ProfileCard,
  argTypes: { backgroundColor: { control: 'color' }, },
} as ComponentMeta<typeof ProfileCard>;

// eslint-disable-next-line no-restricted-syntax
const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  profile:
  {
    first: 'Admin',
    lastname: 'Admin',
    age: 21,
    username: 'admin',
    city: 'City',
    country: 'Kyrgyztan',
    currency: 'RUB',
    avatar: Avatar
  }
};

export const Loading = Template.bind({});
Loading.args = { isLoading: true };

export const WithError = Template.bind({});
WithError.args = { error: 'true' };
