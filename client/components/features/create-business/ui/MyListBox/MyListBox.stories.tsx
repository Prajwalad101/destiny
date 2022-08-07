import { ComponentMeta, ComponentStory } from '@storybook/react';
import { mockList } from '../../data/form.data';
import MyListBox from './MyListBox';

export default {
  title: 'components/Listbox',
  component: MyListBox,
} as ComponentMeta<typeof MyListBox>;

const Template: ComponentStory<typeof MyListBox> = (args) => (
  <MyListBox {...args} />
);

export const Base = Template.bind({});

Base.args = { list: mockList };
