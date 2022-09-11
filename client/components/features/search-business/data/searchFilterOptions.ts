import { SearchFilters } from '@features/search-business/types';

const searchFilterOptions: Partial<SearchFilters> = {
  resturant: {
    price: ['cheap', 'medium', 'high', 'exclusive'],
    suggested: ['delivery', 'reservations', 'events'],
    popular: ['good for kids', 'live music', 'outdoor dining'],
    distance: ['walking (300m)', 'biking (1km)', 'driving (5km)', 'same city'],
  },
};

export default searchFilterOptions;
