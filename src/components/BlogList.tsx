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
      <hr className="mb-10 border-app1" />
      <div className="grid grid-cols-1 gap-10 px-10 pb-24 md:grid-cols-2 gap-y-16 ">
        {posts.map((post, index: number) => {
          return (
            <ClientSideRoute
              key={post._id}
              route={`/post/${post.slug.current}`}
            >
              <div className="flex flex-col cursor-pointer group">
                <div className="relative w-full transition-transform duration-200 ease-out h-80 drop-shadow-xl group-hover:scale-105">
                  <Image
                    className="object-cover object-left"
                    alt={post.author.name}
                    src={urlFor(post.mainImage).url()}
                    fill
                  />
                  <div className="absolute bottom-0 flex justify-between w-full p-5 text-white bg-black rounded bg-opacity-20 backdrop-blur-lg drop-shadow-lg ">
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
                          className="px-3 py-1 text-sm font-semibold text-center text-black rounded-full bg-app1"
                        >
                          <p>{category.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex-1 mt-5">
                  <p className="text-lg font-bold underline">{post.title}</p>
                  <div className="text-gray-500 line-clamp-2">
                    {post.description}...
                  </div>
                </div>

                <p className="flex items-center mt-5 font-bold group-hover:underline">
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
