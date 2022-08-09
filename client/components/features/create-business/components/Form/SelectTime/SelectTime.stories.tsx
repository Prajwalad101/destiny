import { ComponentMeta, ComponentStory } from '@storybook/react';
import { hours, minutes } from '../../../data/formData';
import SelectTime from './SelectTime';

export default {
  title: 'components/CombinedListBox',
  component: SelectTime,
} as ComponentMeta<typeof SelectTime>;

const Template: ComponentStory<typeof SelectTime> = (args) => (
  <SelectTime {...args} />
);

export const Base = Template.bind({});

const timeOfDay = [
  { id: 1, name: 'AM' },
  { id: 2, name: 'PM' },
];

Base.args = {
  hours,
  minutes,
  timeOfDay,
};
