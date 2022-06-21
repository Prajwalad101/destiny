import { ComponentMeta, ComponentStory } from '@storybook/react';
import Link from 'next/link';
import Button from '../../button/Button';
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
    <div className="flex justify-between md:hidden">
      <HamburgerIcon />
      <Logo>Logo</Logo>
      <SearchIcon />
    </div>
    <div className="hidden items-center justify-between text-white md:flex">
      <Logo>Logo</Logo>
      <div className="flex items-center gap-7 lg:gap-10">
        <div className="underline-offset-4 hover:underline">
          <Link href="/">For Businesses</Link>
        </div>
        <div className="underline-offset-4 hover:underline">
          <Link href="/">Write a review</Link>
        </div>
        <Button variant="secondary">Sign Up</Button>
        <Button variant="primary">Log In</Button>
      </div>
    </div>
  </NavbarLayout>
);

export const Base = Template.bind({});

Base.args = {} as INavbarLayout;
