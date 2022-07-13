export interface IFilterOptions {
  price: string[];
  suggested: string[];
  features: string[];
  distance: string[];
}

interface IsearchFilterData {
  resturants: IFilterOptions;
}

const searchFilterData: IsearchFilterData = {
  resturants: {
    price: ['cheap', 'medium', 'high', 'exclusive'],
    suggested: ['delivery', 'reservations', 'events'],
    features: ['good for kids', 'live music', 'outdoor dining'],
    distance: ['walking (300m)', 'biking (1km)', 'driving (5km)', 'same city'],
  },
};

export default searchFilterData;
