import { SearchFilter } from '@features/search-business/components';
import { searchFilterOptions } from '@features/search-business/data';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'components/SearchFilter',
  component: SearchFilter,
} as ComponentMeta<typeof SearchFilter>;

const Template: ComponentStory<typeof SearchFilter> = (args) => (
  <SearchFilter {...args} />
);

export const ResturantFilter = Template.bind({});
ResturantFilter.args = {
  filterBy: searchFilterOptions.resturant,
};
