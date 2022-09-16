import { sortItemData } from '@features/search-business/data';
import { SortItemsProps } from '@features/search-business/types';

const base: SortItemsProps = {
  sortItemData: sortItemData,
  selectedSort: sortItemData[0],
  setSelectedSort: () => sortItemData[0],
  setIsEnabled: () => false,
};

export const mockSortItemsProps = {
  base,
};
