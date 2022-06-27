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

export interface IItem {
  title: string;
  icon: JSX.Element;
}

export interface ITopicDropdownData {
  topic: string;
  items: IItem[];
}

const topicDropdownData: ITopicDropdownData[] = [
  {
    topic: 'food and drinks',
    items: [
      {
        title: 'resturants',
        icon: <FaPizzaSlice size={17} />,
      },
      { title: 'cafes', icon: <BiCoffeeTogo size={20} /> },
      { title: 'fast foods', icon: <MdOutlineFastfood size={20} /> },
      { title: 'hotels', icon: <RiHotelLine size={20} /> },
      {
        title: 'bakery',
        icon: <RiCake3Fill size={20} />,
      },
    ],
  },
  {
    topic: 'Sports and Fitness',
    items: [
      { title: 'gyms', icon: <GiWeightLiftingUp size={20} /> },
      { title: 'futsal', icon: <BiFootball size={20} /> },
      { title: 'tennis', icon: <MdOutlineSportsTennis size={20} /> },
      { title: 'zumba', icon: <BsMusicNote size={17} /> },
      { title: 'swimming', icon: <FaSwimmingPool size={20} /> },
    ],
  },
  {
    topic: 'home services',
    items: [
      { title: 'plumbing', icon: <GiTeePipe size={20} /> },
      { title: 'electricity', icon: <GiWireCoil size={20} /> },
      { title: 'cleaning', icon: <GiVacuumCleaner size={20} /> },
      { title: 'repairs', icon: <GiAutoRepair size={20} /> },
    ],
  },
  {
    topic: 'more',
    items: [
      { title: 'entertainment', icon: <TbRollercoaster size={20} /> },
      { title: 'shopping', icon: <FiShoppingBag size={20} /> },
      { title: 'essentials', icon: <AiOutlineShoppingCart size={20} /> },
      { title: 'vehicles', icon: <AiFillCar size={20} /> },
    ],
    // items: ['entertainment', 'shopping', 'essentials', 'vehicles'],
  },
];

export default topicDropdownData;
