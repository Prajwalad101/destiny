interface ILogo {
  children: React.ReactNode;
}

function Logo({ children }: ILogo) {
  return <div className="text-lg">{children}</div>;
}

export default Logo;
