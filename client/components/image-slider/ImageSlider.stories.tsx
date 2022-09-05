import { ComponentMeta, ComponentStory } from '@storybook/react';
import ImageSlider from './ImageSlider';

export default {
  title: 'components/ImageSlider',
  component: ImageSlider,
} as ComponentMeta<typeof ImageSlider>;

const Template: ComponentStory<typeof ImageSlider> = (args) => (
  <div className="h-[200px] w-[500px]">
    <ImageSlider {...args} />
  </div>
);

export const Base = Template.bind({});
Base.args = {
  images: ['/', '/', '/'],
  imageClassName: 'w-1/2 sm:w-1/3',
};
