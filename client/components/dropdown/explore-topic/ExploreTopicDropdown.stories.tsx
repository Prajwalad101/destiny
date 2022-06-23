import { ComponentMeta, ComponentStory } from '@storybook/react';
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
  topic: 'Food and Drinks',
  items: ['resturants', 'cafes', 'food stalls', 'hotels'],
};
