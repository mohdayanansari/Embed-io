import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-10 py-5 space-x-2 font-bold px-[150px]">
      <div className="flex items-center space-x-2 ">
        <Link href="/">
          <Image
            alt="logo"
            src="/logosmm.png"
            className="rounded-full"
            height={50}
            width={50}
          />
        </Link>
        <h1 className="text-2xl">Our Blogs</h1>
      </div>
      <div>
        <Link
          href={'#'}
          className="px-5 py-3 text-sm md:text-base bg-[#634780] text-[#fff] flex items-center rounded-full text-center font-normal"
        >
          Login to post a blog
        </Link>
      </div>
    </header>
  );
};

export default Header;
