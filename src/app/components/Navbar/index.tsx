import Link from 'next/link';
import RetroContainer from '../RetroContainer';
import { BiJoystick } from "react-icons/bi";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <RetroContainer className="p-2 h-16 w-16">
    <Link href={href} className="hover:text-blue-500 transition-colors px-4 py-2">
      {children}
    </Link>
  </RetroContainer>
);

const Navbar = () => {
  return (
    <nav className="fixed md:w-24 md:h-[30vh] h-16 md:top-10 bottom-0 left-10">
      <RetroContainer className="h-full">
        <div className="h-full flex md:flex-col items-center justify-around p-4 gap-4">
          <NavLink href="/">
            <BiJoystick size={30} />
          </NavLink>
          <NavLink href="/about">
            ℹ️
          </NavLink>
          <NavLink href="/contact">
            📧
          </NavLink>
        </div>
      </RetroContainer>
    </nav>
  );
};

export default Navbar;