import { ComponentMeta, ComponentStory } from '@storybook/react';
import ImageSlider, { IImageSlider } from './ImageSlider';
import { mockImageSliderProps } from './ImageSlider.mocks';

export default {
  title: 'components/Slider/image',
  component: ImageSlider,
  argTypes: {},
} as ComponentMeta<typeof ImageSlider>;

const Template: ComponentStory<typeof ImageSlider> = (args) => (
  <ImageSlider {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockImageSliderProps.base,
} as IImageSlider;
