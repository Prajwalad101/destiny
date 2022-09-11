import { BusinessFeatures } from '@destiny/common/data';
import { AiFillCar, AiOutlineShoppingCart } from 'react-icons/ai';
import { BiCoffeeTogo, BiFootball } from 'react-icons/bi';
import { BsMusicNote } from 'react-icons/bs';
import { FaPizzaSlice, FaSwimmingPool } from 'react-icons/fa';
import { FiShoppingBag } from 'react-icons/fi';
import {
  GiAutoRepair,
  GiTeePipe,
  GiVacuumCleaner,
  GiWeightLiftingUp,
  GiWireCoil,
} from 'react-icons/gi';
import { MdOutlineFastfood, MdOutlineSportsTennis } from 'react-icons/md';
import { RiCake3Fill, RiHotelLine } from 'react-icons/ri';
import { TbRollercoaster } from 'react-icons/tb';
import { IBusinessCategory } from 'types/business';

const iconSize = 20;

// contains data about how all business are categorized
const businessCategoriesData: IBusinessCategory[] = [
  {
    name: 'food and drinks',
    types: [
      {
        name: 'resturant',
        icon: <FaPizzaSlice size={17} />,
        features: [
          { name: BusinessFeatures.delivery },
          { name: BusinessFeatures.reservations },
          { name: BusinessFeatures.events },
          { name: BusinessFeatures.goodForKids },
          { name: BusinessFeatures.liveMusic },
          { name: BusinessFeatures.outdoorDining },
        ],
      },
      {
        name: 'cafe',
        icon: <BiCoffeeTogo size={iconSize} />,
        features: [{ name: BusinessFeatures.delivery }],
      },
      {
        name: 'fast food',
        icon: <MdOutlineFastfood size={iconSize} />,
        features: [{ name: BusinessFeatures.delivery }],
      },
      {
        name: 'hotel',
        icon: <RiHotelLine size={iconSize} />,
        features: [{ name: BusinessFeatures.delivery }],
      },
      {
        name: 'bakery',
        icon: <RiCake3Fill size={iconSize} />,
        features: [{ name: BusinessFeatures.delivery }],
      },
    ],
  },
  {
    name: 'sports and fitness',
    types: [
      {
        name: 'gym',
        icon: <GiWeightLiftingUp size={iconSize} />,
        features: [{ name: BusinessFeatures.delivery }],
      },
      {
        name: 'futsal',
        icon: <BiFootball size={iconSize} />,
        features: [{ name: BusinessFeatures.delivery }],
      },
      {
        name: 'tennis',
        icon: <MdOutlineSportsTennis size={iconSize} />,
        features: [{ name: BusinessFeatures.delivery }],
      },
      {
        name: 'zumba',
        icon: <BsMusicNote size={17} />,
        features: [{ name: BusinessFeatures.delivery }],
      },
      {
        name: 'swimming',
        icon: <FaSwimmingPool size={iconSize} />,
        features: [{ name: BusinessFeatures.delivery }],
      },
    ],
  },
  {
    name: 'home services',
    types: [
      {
        name: 'plumbing',
        icon: <GiTeePipe size={iconSize} />,
        features: [{ name: BusinessFeatures.delivery }],
      },
      {
        name: 'electricity',
        icon: <GiWireCoil size={iconSize} />,
        features: [{ name: BusinessFeatures.delivery }],
      },
      {
        name: 'cleaning',
        icon: <GiVacuumCleaner size={iconSize} />,
        features: [{ name: BusinessFeatures.delivery }],
      },
      {
        name: 'repairs',
        icon: <GiAutoRepair size={iconSize} />,
        features: [{ name: BusinessFeatures.delivery }],
      },
    ],
  },
  {
    name: 'others',
    types: [
      {
        name: 'entertainment',
        icon: <TbRollercoaster size={iconSize} />,
        features: [{ name: BusinessFeatures.delivery }],
      },
      {
        name: 'shopping',
        icon: <FiShoppingBag size={iconSize} />,
        features: [{ name: BusinessFeatures.delivery }],
      },
      {
        name: 'essential',
        icon: <AiOutlineShoppingCart size={iconSize} />,
        features: [{ name: BusinessFeatures.delivery }],
      },
      {
        name: 'vehicles',
        icon: <AiFillCar size={iconSize} />,
        features: [{ name: BusinessFeatures.delivery }],
      },
    ],
  },
];

export default businessCategoriesData;
