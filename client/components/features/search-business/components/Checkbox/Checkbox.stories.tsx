import { Checkbox } from '@features/search-business/components';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'components/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Base = Template.bind({});
Base.args = {
  filterName: 'Custom Component',
};
