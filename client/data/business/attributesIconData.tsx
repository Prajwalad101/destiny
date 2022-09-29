import { businessFeatures } from '@destiny/common/data';
import { BusinessFeature } from '@destiny/common/types';
import { BsCalendar2Event, BsPhoneVibrate } from 'react-icons/bs';
import { FaChild } from 'react-icons/fa';
import { MdOutlineBrunchDining, MdOutlineLibraryMusic } from 'react-icons/md';
import { TbTruckDelivery } from 'react-icons/tb';

const attributesIconData: { name: BusinessFeature; icon: JSX.Element }[] = [
  { name: businessFeatures.delivery, icon: <TbTruckDelivery /> },
  { name: businessFeatures.reservations, icon: <BsPhoneVibrate /> },
  { name: businessFeatures.events, icon: <BsCalendar2Event /> },
  { name: businessFeatures.goodForKids, icon: <FaChild /> },
  { name: businessFeatures.liveMusic, icon: <MdOutlineLibraryMusic /> },
  { name: businessFeatures.outdoorDining, icon: <MdOutlineBrunchDining /> },
];

export default attributesIconData;
