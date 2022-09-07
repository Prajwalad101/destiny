import { ComponentMeta, ComponentStory } from '@storybook/react';
import businessCategories from 'data/business/categoriesData';

import { CategoriesDropdown } from '@features/home-page/components';

export default {
  title: 'components/Dropdown',
  component: CategoriesDropdown,
} as ComponentMeta<typeof CategoriesDropdown>;

const Template: ComponentStory<typeof CategoriesDropdown> = (args) => (
  <CategoriesDropdown {...args} />
);

export const Base = Template.bind({});

// to render a single dropdown
Base.args = businessCategories[0];
