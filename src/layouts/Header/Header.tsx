import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-10 py-5 space-x-2 font-bold">
      <div className="flex items-center space-x-2 ">
        <Link href="/">
          <Image
            alt="logo"
            src="https://avatars.githubusercontent.com/u/84264814?v=4"
            className="rounded-full"
            height={50}
            width={50}
          />
        </Link>
        <h1>Blog App</h1>
      </div>
      <div>
        <Link
          href={'#'}
          className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center"
        >
          This is custom button
        </Link>
      </div>
    </header>
  );
};

export default Header;
