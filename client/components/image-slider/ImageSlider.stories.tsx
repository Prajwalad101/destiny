import { ComponentMeta, ComponentStory } from '@storybook/react';
import ImageSlider from './ImageSlider';

export default {
  title: 'components/ImageSlider',
  component: ImageSlider,
} as ComponentMeta<typeof ImageSlider>;

const Template: ComponentStory<typeof ImageSlider> = (args) => (
  <div className="h-[200px] w-full">
    <ImageSlider {...args} />
  </div>
);

export const Base = Template.bind({});
Base.args = {
  images: [
    '/tempImages/image1.jpg',
    '/tempImages/image2.jpg',
    '/tempImages/image3.jpg',
    '/tempImages/image4.jpg',
    '/tempImages/image5.jpg',
  ],
  // imageBreakpoint: [{ 500: '33%' }, { default: '50%' }],
  imageClassName: 'w-[50%] sm:w-1/3',
};
