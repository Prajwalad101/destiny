import Link from 'next/link';

interface ILogo {
  children: React.ReactNode;
}

function Logo({ children }: ILogo) {
  return (
    <Link href="/">
      <a>
        <div className="text-xl font-merriweather">{children}</div>
      </a>
    </Link>
  );
}

export default Logo;
