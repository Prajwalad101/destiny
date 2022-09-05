import { ComponentMeta, ComponentStory } from '@storybook/react';
import SearchFilter from './SearchFilter';

import searchFilterData from 'data/searchFilter';

export default {
  title: 'components/SearchFilter',
  component: SearchFilter,
} as ComponentMeta<typeof SearchFilter>;

const Template: ComponentStory<typeof SearchFilter> = (args) => (
  <SearchFilter {...args} />
);

export const ResturantFilter = Template.bind({});
ResturantFilter.args = {
  filterOption: searchFilterData.resturants,
};
