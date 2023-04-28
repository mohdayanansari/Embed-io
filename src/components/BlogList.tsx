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
              <div className="flex flex-col p-2 cursor-pointer group rounded-3xl bg-slate-50 drop-shadow-xl h-[400px]">
                <div className="relative w-full transition-transform duration-200 ease-out h-[300px] drop-shadow-xl group-hover:scale-105 rounded-3xl">
                  <Image
                    className="object-cover object-left rounded-3xl"
                    alt={post.author.name}
                    src={urlFor(post.mainImage).url()}
                    fill
                  />
                  <div className="absolute bottom-0 flex justify-between w-full p-5 text-white bg-black rounded-3xl bg-opacity-20 backdrop-blur-lg drop-shadow-lg ">
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

                <div className="flex-1 px-5 mt-5">
                  <p className="text-lg font-bold underline">{post.title}</p>
                  <div className="text-gray-500 line-clamp-2">
                    {post.description}...
                  </div>
                </div>

                <p className="flex items-center px-5 mt-5 font-bold group-hover:underline">
                  Read Post
                  <ArrowUpRightIcon className="w-4 h-4 ml-2" />
                </p>
              </div>
            </ClientSideRoute>
          );
        })}
      </div>
    </div>
  );
};

export default BlogList;
