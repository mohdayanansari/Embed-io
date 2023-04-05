import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const StudioNavbar = (props: any) => {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="" className="flex items-center text-[#F7AB0A] ">
          <ArrowUturnLeftIcon className="h-6 w-6 text-[#F7AB0A] mr-2" />
          Go to Website
        </Link>
        <div className="flex items-center justify-center p-4 border rounded-lg border-rose-500 text-rose-500 ">
          This website is developed by &nbsp;
          <Link
            href="https://in.linkedin.com/in/objectorienteddev"
            className="transition-all duration-300 ease-in-out hover:text-blue-500 animate-bounce"
          >
            Mohd Ayan Ansari
          </Link>
        </div>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default StudioNavbar;
