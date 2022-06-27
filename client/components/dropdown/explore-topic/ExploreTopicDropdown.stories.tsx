import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BiCoffeeTogo } from 'react-icons/bi';
import { FaPizzaSlice } from 'react-icons/fa';
import { MdOutlineFastfood } from 'react-icons/md';
import { RiCake3Fill, RiHotelLine } from 'react-icons/ri';
import { ITopicDropdownData } from '../../../data/dropdown.data';
import ExploreTopicDropdown from './ExploreTopicDropdown';

export default {
  title: 'components/Dropdown',
  component: ExploreTopicDropdown,
} as ComponentMeta<typeof ExploreTopicDropdown>;

const Template: ComponentStory<typeof ExploreTopicDropdown> = (args) => (
  <ExploreTopicDropdown {...args} />
);

export const Base = Template.bind({});
Base.args = {
  topic: 'food and drinks',
  items: [
    {
      title: 'resturants',
      icon: <FaPizzaSlice size={17} />,
    },
    { title: 'cafes', icon: <BiCoffeeTogo size={20} /> },
    { title: 'fast foods', icon: <MdOutlineFastfood size={20} /> },
    { title: 'hotels', icon: <RiHotelLine size={20} /> },
    {
      title: 'bakery',
      icon: <RiCake3Fill size={20} />,
    },
  ],
} as ITopicDropdownData;
