import { ComponentMeta, ComponentStory } from '@storybook/react';
import HamburgerIcon from './HamburgerIcon';

export default {
  title: 'components/HamburgerIcon',
  component: HamburgerIcon,
} as ComponentMeta<typeof HamburgerIcon>;

const Template: ComponentStory<typeof HamburgerIcon> = () => <HamburgerIcon />;

export const Base = Template.bind({});
