const FieldLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid-cols-2 gap-10 md:grid lg:grid-cols-[2fr_3fr] lg:gap-24">
      {children}
    </div>
  );
};

export default FieldLayout;
