import MyTextArea from './components/Form/MyTextArea';
import MyTextInput from './components/Form/MyTextInput';
import { cardData } from './data/info-card.data';
import linkData from './data/link.data.json';
import GetStartedLayout from './layouts/GetStarted';
import Hero from './layouts/Hero';
import Navbar from './layouts/Navbar';
import { OtherProps } from './types/interfaces';
import EllipsisSeperator from './ui/EllipsisSeperator';
import InfoCard from './ui/InfoCard';

export {
  Hero,
  EllipsisSeperator,
  InfoCard,
  Navbar,
  GetStartedLayout,
  MyTextInput,
  MyTextArea,
  cardData,
  linkData,
};
// types
export type { OtherProps };
