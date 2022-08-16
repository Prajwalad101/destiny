import { formData } from '@features/create-business';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SelectTime from './SelectTime';

const { hours, minutes, timeOfDay } = formData;

export default {
  title: 'components/CombinedListBox',
  component: SelectTime,
} as ComponentMeta<typeof SelectTime>;

const Template: ComponentStory<typeof SelectTime> = (args) => (
  <SelectTime {...args} />
);

export const Base = Template.bind({});

Base.args = {
  hours,
  minutes,
  timeOfDay,
};
