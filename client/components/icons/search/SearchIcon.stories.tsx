import { ComponentMeta, ComponentStory } from '@storybook/react';
import SearchIcon from './SearchIcon';

export default {
  title: 'components/SearchIcon',
  component: SearchIcon,
} as ComponentMeta<typeof SearchIcon>;

const Template: ComponentStory<typeof SearchIcon> = () => <SearchIcon />;

export const Base = Template.bind({});
