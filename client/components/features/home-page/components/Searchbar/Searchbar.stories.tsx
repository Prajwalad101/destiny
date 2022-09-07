import { Searchbar } from '@features/home-page/components';
import { ComponentMeta, ComponentStory } from '@storybook/react';

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
