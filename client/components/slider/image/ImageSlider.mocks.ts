import mongoose from 'mongoose';
import { ImageSliderProps } from './ImageSlider';

const base: ImageSliderProps = {
  images: [
    '/images/business/shrestha-swimming-pool/1.jpg',
    '/images/business/shrestha-swimming-pool/2.jpg',
  ],
  id: new mongoose.Types.ObjectId('24080980234'),
};

export const mockImageSliderProps = {
  base,
};
