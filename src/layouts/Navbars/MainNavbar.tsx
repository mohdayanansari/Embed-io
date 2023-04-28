import Image from 'next/image';
import Link from 'next/link';

const MainNavbar = () => {
  return (
    <nav className="flex justify-between w-full h-[80px] drop-shadow-xl bg-white items-center px-[150px]">
      <div>
        <Image src="/logosmm.png" alt="" width={60} height={60} />
      </div>
      <div className="flex justify-center w-full">
        <ul className="flex gap-10">
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
    title: 'Projects',
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
