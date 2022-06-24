interface ICardsListLayout {
  children: React.ReactNode;
}

function CardsListLayout({ children }: ICardsListLayout) {
  return (
    <div className="mt-10">
      <h3 className="mb-3 font-rubik text-xl font-medium text-secondarytext">
        Top picks for you
      </h3>
      <div className="flex gap-2">{children}</div>
    </div>
  );
}

export default CardsListLayout;
