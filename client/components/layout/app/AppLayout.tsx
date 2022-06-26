interface IAppLayout {
  children: React.ReactNode;
}

function AppLayout({ children }: IAppLayout) {
  return <div className="mx-3 md:px-16">{children}</div>;
}

export default AppLayout;
