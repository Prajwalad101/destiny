import { businessFeatures } from '@destiny/common/data';
import { BusinessFeature } from '@destiny/common/types';
import { FaChild } from 'react-icons/fa';
import { GiDeliveryDrone, GiPartyPopper, GiSmartphone } from 'react-icons/gi';
import { MdOutlineDining, MdOutlineLibraryMusic } from 'react-icons/md';

const defaultSize = 17;

const attributesIconData: {
  name: BusinessFeature;
  icon: (_size?: number) => JSX.Element;
}[] = [
  {
    name: businessFeatures.delivery,
    icon: (size = defaultSize) => <GiDeliveryDrone size={size} />,
  },
  {
    name: businessFeatures.reservations,
    icon: (size = defaultSize) => <GiSmartphone size={size} />,
  },
  {
    name: businessFeatures.events,
    icon: (size = defaultSize) => <GiPartyPopper size={size} />,
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
    icon: (size = defaultSize) => <MdOutlineDining size={size} />,
  },
];

export default attributesIconData;
