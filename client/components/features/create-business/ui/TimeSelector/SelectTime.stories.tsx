import { ComponentMeta, ComponentStory } from '@storybook/react';
import { hours, minutes } from '../../data/formData';
import CombinedListBox from './SelectTime';

export default {
  title: 'components/CombinedListBox',
  component: CombinedListBox,
} as ComponentMeta<typeof CombinedListBox>;

const Template: ComponentStory<typeof CombinedListBox> = (args) => (
  <CombinedListBox {...args} />
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
