import Image from 'next/image';
import Link from 'next/link';
import MobileNav from './MobileNav';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

const Navbar = () => {
  return (
    <nav className="flex flex-between fixed z-10 w-full bg-light-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image src="/icons/logo.svg" alt="Bloom Logo" width={32} height={32} className="max-sm:size-10" />
        <p className="text-[26px] font-extrabold text-black max-sm:hidden">Bloom</p>
      </Link>
      <div className="flex-between gap-5">
        {/* Clerk - User Management */}
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <MobileNav />
      </div>
    </nav>
  );
};
export default Navbar;
