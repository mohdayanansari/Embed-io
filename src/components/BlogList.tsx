import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import urlFor from '../../lib/urlFor';
import ClientSideRoute from './ClientSideRoute';

type Props = {
  posts: Post[];
};

const BlogList = ({ posts }: Props) => {
  return (
    <div className="">
      <hr className="mb-10 border-[#6347802e]" />
      <div className="grid grid-cols-1 gap-10  pb-24 md:grid-cols-3 gap-y-16 px-[150px]">
        {' '}
        {posts.map((post, index: number) => {
          return (
            <ClientSideRoute
              key={post._id}
              route={`/post/${post.slug.current}`}
            >
              <div className="relative flex flex-col  cursor-pointer group bg-transparent drop-shadow-xl h-[500px] text-white">
                <div className="relative w-full transition-transform duration-200 ease-out h-[250px] drop-shadow-xl group-hover:scale-105 ">
                  <Image
                    className="object-cover object-left "
                    alt={post.author.name}
                    src={urlFor(post.mainImage).url()}
                    fill
                  />
                  <div className="absolute bottom-0 flex justify-between w-full p-5 text-white bg-black bg-opacity-20 backdrop-blur-lg drop-shadow-lg ">
                    <div>
                      <p className="font-bold">{post.title}</p>

                      <p>
                        {new Date(post._createdAt).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </p>
                    </div>
                    {/* Category */}
                    <div className="flex flex-col items-center md:flex-row gap-y-2 md:gap-x-2">
                      {post.categories.map((category) => (
                        <div
                          key={category._id}
                          className="px-3 py-1 text-sm font-semibold text-center text-white rounded-full bg-app1"
                        >
                          <p>{category.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start justify-between flex-1 w-full mt-5">
                  <div className="flex flex-col w-full gap-y-[20px]">
                    <h2 className="text-3xl font-semibold underline capitalize">
                      {post.title}
                    </h2>
                    <div className="text-gray-500 line-clamp-2">
                      {post.description}...
                    </div>
                  </div>
                  <p className="flex items-center mt-5 font-bold group-hover:underline">
                    Read Post
                    <ArrowUpRightIcon className="w-4 h-4 ml-2" />
                  </p>
                </div>
              </div>
            </ClientSideRoute>
          );
        })}
      </div>
    </div>
  );
};

export default BlogList;
