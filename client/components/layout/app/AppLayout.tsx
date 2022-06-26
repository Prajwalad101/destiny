interface IAppLayout {
  children: React.ReactNode;
}

function AppLayout({ children }: IAppLayout) {
  return <div className="px-3 md:px-44">{children}</div>;
}

export default AppLayout;
