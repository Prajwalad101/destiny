import { ComponentMeta, ComponentStory } from '@storybook/react';
import SelectTime from './SelectTime';

export default {
  title: 'components/CombinedListBox',
  component: SelectTime,
} as ComponentMeta<typeof SelectTime>;

const Template: ComponentStory<typeof SelectTime> = (args) => (
  <SelectTime {...args} />
);

export const Base = Template.bind({});
