import { ISortItems } from './SortItems';

const base: ISortItems = {
  sortItems: [
    { id: 1, name: 'Most Popular' },
    { id: 2, name: 'Best Rating' },
    { id: 3, name: 'Newest' },
    { id: 4, name: 'Price: Low to High' },
    { id: 5, name: 'Price: High to Low' },
  ],
};

export const mockSortItemsProps = {
  base,
};
