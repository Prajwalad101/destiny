interface IAppLayout {
  children: React.ReactNode;
}

function AppLayout({ children }: IAppLayout) {
  return (
    <div className="px-3 md:px-16">
      {/* Individual page of the whole app */}
      {children}
    </div>
  );
}

export default AppLayout;
