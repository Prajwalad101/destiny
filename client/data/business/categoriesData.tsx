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
import { IBusinessCategoryDropdown } from '../../types/interfaces';
import businessFeatures from './featuresData';

const iconSize = 20;

// resturant features
const {
  delivery,
  reservations,
  events,
  goodForKids,
  liveMusic,
  outdoorDining,
} = businessFeatures;

const businessCategoriesData: IBusinessCategoryDropdown[] = [
  {
    name: 'food and drinks',
    subCategories: [
      {
        name: 'resturants',
        icon: <FaPizzaSlice size={17} />,
        features: [
          { name: delivery },
          { name: reservations },
          { name: events },
          { name: goodForKids },
          { name: liveMusic },
          { name: outdoorDining },
        ],
      },
      {
        name: 'cafes',
        icon: <BiCoffeeTogo size={iconSize} />,
        features: [{ name: '' }],
      },
      {
        name: 'fast foods',
        icon: <MdOutlineFastfood size={iconSize} />,
        features: [{ name: '' }],
      },
      {
        name: 'hotels',
        icon: <RiHotelLine size={iconSize} />,
        features: [{ name: '' }],
      },
      {
        name: 'bakery',
        icon: <RiCake3Fill size={iconSize} />,
        features: [{ name: '' }],
      },
    ],
  },
  {
    name: 'sports and fitness',
    subCategories: [
      {
        name: 'gyms',
        icon: <GiWeightLiftingUp size={iconSize} />,
        features: [{ name: '' }],
      },
      {
        name: 'futsal',
        icon: <BiFootball size={iconSize} />,
        features: [{ name: '' }],
      },
      {
        name: 'tennis',
        icon: <MdOutlineSportsTennis size={iconSize} />,
        features: [{ name: '' }],
      },
      {
        name: 'zumba',
        icon: <BsMusicNote size={17} />,
        features: [{ name: '' }],
      },
      {
        name: 'swimming',
        icon: <FaSwimmingPool size={iconSize} />,
        features: [{ name: '' }],
      },
    ],
  },
  {
    name: 'home services',
    subCategories: [
      {
        name: 'plumbing',
        icon: <GiTeePipe size={iconSize} />,
        features: [{ name: '' }],
      },
      {
        name: 'electricity',
        icon: <GiWireCoil size={iconSize} />,
        features: [{ name: '' }],
      },
      {
        name: 'cleaning',
        icon: <GiVacuumCleaner size={iconSize} />,
        features: [{ name: '' }],
      },
      {
        name: 'repairs',
        icon: <GiAutoRepair size={iconSize} />,
        features: [{ name: '' }],
      },
    ],
  },
  {
    name: 'others',
    subCategories: [
      {
        name: 'entertainment',
        icon: <TbRollercoaster size={iconSize} />,
        features: [{ name: '' }],
      },
      {
        name: 'shopping',
        icon: <FiShoppingBag size={iconSize} />,
        features: [{ name: '' }],
      },
      {
        name: 'essentials',
        icon: <AiOutlineShoppingCart size={iconSize} />,
        features: [{ name: '' }],
      },
      {
        name: 'vehicles',
        icon: <AiFillCar size={iconSize} />,
        features: [{ name: '' }],
      },
    ],
  },
];

export default businessCategoriesData;
