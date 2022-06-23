import { ComponentMeta, ComponentStory } from '@storybook/react';
import Searchbar from './Searchbar';

export default {
  title: 'components/Searchbar',
  component: Searchbar,
} as ComponentMeta<typeof Searchbar>;

const Template: ComponentStory<typeof Searchbar> = (args) => (
  <Searchbar {...args} />
);

export const Base = Template.bind({});
Base.args = {
  foodPlaceholder: 'Search for stuff ...',
  locationPlaceholder: 'Kathmandu, New Baneshwor',
};
