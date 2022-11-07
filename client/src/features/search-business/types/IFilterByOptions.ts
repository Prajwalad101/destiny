import { IBusiness } from '@destiny/common/types';

export interface IFilterByOptions {
  price: IBusiness['price'][];
  suggested: IBusiness['features'];
  popular: IBusiness['features'];
  // distance: (
  //   | 'walking (300m)'
  //   | 'biking (1km)'
  //   | 'driving (5km)'
  //   | 'same city'
  // )[];
}
