interface ICardsListLayout {
  children: React.ReactNode;
}

function CardsListLayout({ children }: ICardsListLayout) {
  return (
    <section>
      <h3 className="my-7 font-rubik text-xl font-medium text-gray-700 sm:text-[22px] md:my-10 md:text-center md:text-[26px]">
        Top picks for you
      </h3>
      <div className="grid grid-cols-2 gap-y-5 gap-x-3 sm:grid-cols-3 md:grid-cols-4">
        {children}
      </div>
    </section>
  );
}

export default CardsListLayout;
