export interface IFilterOptions {
  price: string[];
  suggested: string[];
  features: string[];
}

interface IsearchFilterData {
  resturants: IFilterOptions;
}

const searchFilterData: IsearchFilterData = {
  resturants: {
    price: ['cheap', 'medium', 'high', 'exclusive'],
    suggested: ['delivery', 'reservations', 'events'],
    features: ['good for kids', 'live music', 'outdoor dining'],
  },
};

export default searchFilterData;
