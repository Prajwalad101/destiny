import { ComponentMeta, ComponentStory } from '@storybook/react';
import SortItems from './SortItems';
import { mockSortItemsProps } from './SortItems.mocks';

export default {
  title: 'components/SortItems',
  component: SortItems,
  argTypes: {},
} as ComponentMeta<typeof SortItems>;

const Template: ComponentStory<typeof SortItems> = (args) => (
  <SortItems {...args} />
);

export const Base = Template.bind({});
Base.args = {
  ...mockSortItemsProps.base,
};
