import Image from 'next/image';
import Link from 'next/link';

const MainNavbar = () => {
  return (
    <nav className="flex justify-between w-full h-[80px] drop-shadow-xl bg-transparent items-center px-[150px]">
      <div>
        <Image src="/logosmm.png" alt="" width={60} height={60} />
      </div>
      <div className="flex justify-center flex-1 ">
        <ul className="flex gap-10 text-white text-[18px]">
          {links.map((link, index) => {
            return (
              <Link key={index} href={`${link.link}`}>
                {link.title}
              </Link>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
const links = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Blogs',
    link: '/post',
  },
  {
    title: 'Docs',
    link: '/projects',
  },
  {
    title: 'Community',
    link: '/community',
  },
  {
    title: 'About Us',
    link: '/about-us',
  },
];
export default MainNavbar;
