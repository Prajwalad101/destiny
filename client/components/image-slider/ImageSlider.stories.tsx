import { ComponentMeta, ComponentStory } from '@storybook/react';
import ImageSlider from './ImageSlider';

export default {
  title: 'components/ImageSlider',
  component: ImageSlider,
} as ComponentMeta<typeof ImageSlider>;

const Template: ComponentStory<typeof ImageSlider> = (args) => (
  <ImageSlider {...args} />
);

export const Base = Template.bind({});
Base.args = {
  images: ['/'],
};
