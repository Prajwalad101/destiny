import { businessFeatures, businessSubcategories } from '@destiny/common/data';
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
import { ICategoryDropdown } from 'types/business';

const iconSize = 20;

// contains data about how all business are categorized
const categoryDropdownData: ICategoryDropdown[] = [
  {
    name: 'food and drinks',
    subcategories: [
      {
        name: businessSubcategories.resturant,
        icon: <FaPizzaSlice size={17} />,
        features: [
          { name: businessFeatures.delivery },
          { name: businessFeatures.reservations },
          { name: businessFeatures.events },
          { name: businessFeatures.goodForKids },
          { name: businessFeatures.liveMusic },
          { name: businessFeatures.outdoorDining },
        ],
      },
      {
        name: businessSubcategories.cafe,
        icon: <BiCoffeeTogo size={iconSize} />,
        features: [{ name: businessFeatures.delivery }],
      },
      {
        name: businessSubcategories.fastfood,
        icon: <MdOutlineFastfood size={iconSize} />,
        features: [{ name: businessFeatures.delivery }],
      },
      {
        name: businessSubcategories.hotel,
        icon: <RiHotelLine size={iconSize} />,
        features: [{ name: businessFeatures.delivery }],
      },
      {
        name: businessSubcategories.bakery,
        icon: <RiCake3Fill size={iconSize} />,
        features: [{ name: businessFeatures.delivery }],
      },
    ],
  },
  {
    name: 'sports and fitness',
    subcategories: [
      {
        name: businessSubcategories.gym,
        icon: <GiWeightLiftingUp size={iconSize} />,
        features: [{ name: businessFeatures.delivery }],
      },
      {
        name: businessSubcategories.futsal,
        icon: <BiFootball size={iconSize} />,
        features: [{ name: businessFeatures.delivery }],
      },
      {
        name: businessSubcategories.tennis,
        icon: <MdOutlineSportsTennis size={iconSize} />,
        features: [{ name: businessFeatures.delivery }],
      },
      {
        name: businessSubcategories.zumba,
        icon: <BsMusicNote size={17} />,
        features: [{ name: businessFeatures.delivery }],
      },
      {
        name: businessSubcategories.swimming,
        icon: <FaSwimmingPool size={iconSize} />,
        features: [{ name: businessFeatures.delivery }],
      },
    ],
  },
  {
    name: 'home services',
    subcategories: [
      {
        name: businessSubcategories.plumbing,
        icon: <GiTeePipe size={iconSize} />,
        features: [{ name: businessFeatures.delivery }],
      },
      {
        name: businessSubcategories.electricity,
        icon: <GiWireCoil size={iconSize} />,
        features: [{ name: businessFeatures.delivery }],
      },
      {
        name: businessSubcategories.cleaning,
        icon: <GiVacuumCleaner size={iconSize} />,
        features: [{ name: businessFeatures.delivery }],
      },
      {
        name: businessSubcategories.repairs,
        icon: <GiAutoRepair size={iconSize} />,
        features: [{ name: businessFeatures.delivery }],
      },
    ],
  },
  {
    name: 'others',
    subcategories: [
      {
        name: businessSubcategories.entertainment,
        icon: <TbRollercoaster size={iconSize} />,
        features: [{ name: businessFeatures.delivery }],
      },
      {
        name: businessSubcategories.shopping,
        icon: <FiShoppingBag size={iconSize} />,
        features: [{ name: businessFeatures.delivery }],
      },
      {
        name: businessSubcategories.essential,
        icon: <AiOutlineShoppingCart size={iconSize} />,
        features: [{ name: businessFeatures.delivery }],
      },
      {
        name: businessSubcategories.vehicle,
        icon: <AiFillCar size={iconSize} />,
        features: [{ name: businessFeatures.delivery }],
      },
    ],
  },
];

export default categoryDropdownData;
