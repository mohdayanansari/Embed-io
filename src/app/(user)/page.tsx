import Animation from '@/components/HomePage/Animation';
import MainNavbar from '@/layouts/Navbars/MainNavbar';
import Image from 'next/image';

const HomePage = () => {
  return (
    <>
      <MainNavbar />
      <div className="relative min-h-screen bg-[#e9cffa]">
        <div className="absolute">
          <div className="relative w-screen h-screen">
            <Image
              src={'/graphics/bg.svg'}
              alt="Embed.org.in"
              fill
              className="object-contain object-center "
            />
          </div>
        </div>
        <div className="relative flex items-center w-full h-screen">
          <div className="pl-[100px] mt-[-150px] w-[70%] flex flex-col gap-40">
            <h1 className="text-[70px] font-black leading-[80px]">
              The Choice you make today <br /> design&apos;s your future.
            </h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Recusandae aliquid ullam et esse minus id cum minima atque
              corrupti hic!
              <br />
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              cupiditate perferendis sequi repudiandae labore non laboriosam
              animi quia. Fuga culpa, placeat ex laudantium rerum id corrupti
              alias beatae, iusto maiores amet officiis laborum consequuntur vel
              ad sed debitis earum numquam libero! Modi, cumque quae quam
              assumenda eligendi doloribus explicabo voluptatem!
            </p>
          </div>
          <div className="mt-[-200px]">
            <Animation />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
