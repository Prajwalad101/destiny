interface IAppLayout {
  children: React.ReactNode;
}

function AppLayout({ children }: IAppLayout) {
  return (
    <div className="mx-auto px-3 sm:px-7 lg:max-w-[1200px]">{children}</div>
  );
}

export default AppLayout;
