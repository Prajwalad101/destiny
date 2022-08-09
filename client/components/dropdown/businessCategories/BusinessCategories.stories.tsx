import { ComponentMeta, ComponentStory } from '@storybook/react';
import businessCategories from '../../../data/business/categoriesData';
import {
  default as BusinessCategoriesDropdown,
  default as ExploreTopicDropdown,
} from './BusinessCategories';

export default {
  title: 'components/Dropdown',
  component: ExploreTopicDropdown,
} as ComponentMeta<typeof ExploreTopicDropdown>;

const Template: ComponentStory<typeof ExploreTopicDropdown> = (args) => (
  <BusinessCategoriesDropdown {...args} />
);

export const Base = Template.bind({});

// to render a single dropdown
Base.args = businessCategories[0];
