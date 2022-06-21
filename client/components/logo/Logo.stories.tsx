import { ComponentMeta, ComponentStory } from '@storybook/react';
import Logo from './Logo';

export default {
  title: 'components/logo',
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Base = Template.bind({});
Base.args = {
  children: 'Logo',
};
