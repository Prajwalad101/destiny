import { businessFeatures } from '@destiny/common/data';
import { BusinessFeature } from '@destiny/common/types';
import { FaChild } from 'react-icons/fa';
import {
  MdDirectionsBike,
  MdOutlineLibraryMusic,
  MdOutlineLocalDining,
} from 'react-icons/md';
import { RiCakeLine } from 'react-icons/ri';
import { TbPhone } from 'react-icons/tb';

const defaultSize = 17;

const attributesIconData: {
  name: BusinessFeature;
  icon: (_size?: number) => JSX.Element;
}[] = [
  {
    name: businessFeatures.delivery,
    icon: (size = defaultSize) => <MdDirectionsBike size={size} />,
  },
  {
    name: businessFeatures.reservations,
    icon: (size = defaultSize) => <TbPhone size={size} />,
  },
  {
    name: businessFeatures.events,
    icon: (size = defaultSize) => <RiCakeLine size={size} />,
  },
  {
    name: businessFeatures.goodForKids,
    icon: (size = defaultSize) => <FaChild size={size} />,
  },
  {
    name: businessFeatures.liveMusic,
    icon: (size = defaultSize) => <MdOutlineLibraryMusic size={size} />,
  },
  {
    name: businessFeatures.outdoorDining,
    icon: (size = defaultSize) => <MdOutlineLocalDining size={size} />,
  },
];

export default attributesIconData;
