interface ICardsListLayout {
  children: React.ReactNode;
}

function CardsListLayout({ children }: ICardsListLayout) {
  return (
    <div className="mt-10 ">
      <h3 className="mb-5 font-rubik text-xl font-medium text-secondarytext sm:text-[22px]">
        Top picks for you
      </h3>
      <div className="grid grid-cols-2 gap-y-5 gap-x-3 sm:grid-cols-3">
        {children}
      </div>
    </div>
  );
}

export default CardsListLayout;
