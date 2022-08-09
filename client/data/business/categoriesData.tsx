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

const businessCategories: IBusinessCategoryDropdown[] = [
  {
    name: 'food and drinks',
    subCategories: [
      {
        name: 'resturants',
        icon: <FaPizzaSlice size={17} />,
        features: [
          delivery,
          reservations,
          events,
          goodForKids,
          liveMusic,
          outdoorDining,
        ],
      },
      { name: 'cafes', icon: <BiCoffeeTogo size={iconSize} /> },
      { name: 'fast foods', icon: <MdOutlineFastfood size={iconSize} /> },
      { name: 'hotels', icon: <RiHotelLine size={iconSize} /> },
      {
        name: 'bakery',
        icon: <RiCake3Fill size={iconSize} />,
      },
    ],
  },
  {
    name: 'sports and fitness',
    subCategories: [
      { name: 'gyms', icon: <GiWeightLiftingUp size={iconSize} /> },
      { name: 'futsal', icon: <BiFootball size={iconSize} /> },
      { name: 'tennis', icon: <MdOutlineSportsTennis size={iconSize} /> },
      { name: 'zumba', icon: <BsMusicNote size={17} /> },
      { name: 'swimming', icon: <FaSwimmingPool size={iconSize} /> },
    ],
  },
  {
    name: 'home services',
    subCategories: [
      { name: 'plumbing', icon: <GiTeePipe size={iconSize} /> },
      { name: 'electricity', icon: <GiWireCoil size={iconSize} /> },
      { name: 'cleaning', icon: <GiVacuumCleaner size={iconSize} /> },
      { name: 'repairs', icon: <GiAutoRepair size={iconSize} /> },
    ],
  },
  {
    name: 'others',
    subCategories: [
      { name: 'entertainment', icon: <TbRollercoaster size={iconSize} /> },
      { name: 'shopping', icon: <FiShoppingBag size={iconSize} /> },
      { name: 'essentials', icon: <AiOutlineShoppingCart size={iconSize} /> },
      { name: 'vehicles', icon: <AiFillCar size={iconSize} /> },
    ],
  },
];

export default businessCategories;
