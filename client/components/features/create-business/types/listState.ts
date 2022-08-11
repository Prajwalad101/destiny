import { Dispatch, SetStateAction } from 'react';

type ListState = {
  selected: {
    name: string;
  };
  setSelected: Dispatch<
    SetStateAction<{
      name: string;
    }>
  >;
};

export type { ListState };
