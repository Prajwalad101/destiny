type ListState = {
  selected: {
    name: string;
  };
  // eslint-disable-next-line no-unused-vars
  setSelected: ({ name }: { name: string }) => void;
};

export type { ListState };
