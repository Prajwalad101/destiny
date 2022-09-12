import { BusinessType, IBusiness } from '@destiny/common/types';

export interface FilterByOptions {
  price: IBusiness['price'][];
  suggested: IBusiness['features'];
  popular: IBusiness['features'];
  //! Temporary Fix: The values for distance should be defined somewhere top level
  distance: (
    | 'walking (300m)'
    | 'biking (1km)'
    | 'driving (5km)'
    | 'same city'
  )[];
}

export type SearchFilters = {
  [_type in BusinessType]: FilterByOptions;
};
