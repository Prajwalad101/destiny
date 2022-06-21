import { ComponentMeta, ComponentStory } from '@storybook/react';
import HamburgerIcon from '../../icons/hamburger/HamburgerIcon';
import SearchIcon from '../../icons/search/SearchIcon';
import Logo from '../../logo/Logo';
import NavbarLayout, { INavbarLayout } from './NavbarLayout';

export default {
  title: 'layouts/NavbarLayout',
  component: NavbarLayout,
  argTypes: {},
} as ComponentMeta<typeof NavbarLayout>;

const Template: ComponentStory<typeof NavbarLayout> = (args) => (
  <NavbarLayout {...args}>
    <HamburgerIcon />
    <Logo>Logo</Logo>
    <SearchIcon />
  </NavbarLayout>
);

export const Base = Template.bind({});

Base.args = {} as INavbarLayout;
