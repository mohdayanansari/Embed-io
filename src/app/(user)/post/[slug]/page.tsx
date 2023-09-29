import { RichTextComponents } from '@/components/RichTextComponents';
import YouTubePlayer from '@/components/YouTubePlayer';
import MainNavbar from '@/layouts/Navbars/MainNavbar';
import { PortableText } from '@portabletext/react';
import { groq } from 'next-sanity';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '../../../../../lib/sanity.client';
import urlFor from '../../../../../lib/urlFor';

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 60; //seconds

export async function generateStaticParams() {
  const query = groq`*[_type=='post']
    {
        slug
    }`;

  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({
    slug,
  }));
}

const PostPage = async ({ params: { slug } }: Props) => {
  const query = groq`
        *[_type=='post' && slug.current == $slug][0]
        {
           ...,
           author->,
           categories[]->
        }
    `;
  const post = await client.fetch(query, { slug });

  //   console.log('SINGLE POST:::😲::', post);

  return (
    <article className=" pb-28">
      <div className="relative flex flex-col justify-between h-[75vh]  ">
        <div className="absolute top-0 w-full h-full p-10 ">
          <Image
            className="object-cover object-center mx-auto"
            src={urlFor(post.mainImage).url()}
            alt={post.author.name}
            fill
          />
        </div>
        <div className="z-10 w-full bg-gradient-to-b from-black/80">
          <MainNavbar />
        </div>
        <section className="z-10 w-full p-5 text-white bg-gradient-to-t from-black/80 px-[150px]">
          <div className="flex flex-col justify-between md:flex-row gap-y-5">
            <div className="flex-1">
              <h1 className="text-5xl font-black uppercase drop-shadow-xl">
                {post.title}
              </h1>
              <p className="text-4xl font-light drop-shadow-xl">
                {post.description}
              </p>
            </div>
          </div>

          {/* post description */}
          <div className="pt-10">
            <div className="flex items-center gap-2">
              <Image
                className="rounded-full"
                src={urlFor(post.author.image).url()}
                alt={post.author.name}
                height={40}
                width={40}
              />
              <p className="text-sm italic ">
                by {post.author.name}
                {' - '}
                {new Date(post._createdAt).toLocaleDateString('en-IN', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </p>
            </div>
            {/* About Author */}
            {/* <div className="flex items-center gap-2 text-sm mt-[10px]">
              <p className="font-bold">About Author:</p>
              <PortableText
                value={post.author.bio}
                components={RichTextComponents}
              />
            </div> */}
            {/* categories */}
            <div className="flex items-center justify-start mt-auto mb-5 space-x-2">
              {post.categories.map((category: any) => (
                <p
                  key={category._id}
                  className="px-3 py-1 mt-4 text-sm font-semibold text-white bg-dark "
                >
                  {category.title}
                </p>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="px-[150px] grid grid-cols-1 md:grid-cols-12 pt-[80px] md:gap-x-[80px]">
        <div className="col-span-9">
          <PortableText value={post.body} components={RichTextComponents} />
          <YouTubePlayer link={post?.youtubeUrl} />
          {/* <PortableText value={post?.youtubeUrl} types={serializers} /> */}
        </div>
        <div className="col-span-3">
          <div>
            <h1 className="text-3xl font-bold text-white">Follow Us</h1>
            <hr className="mt-2 bg-white opacity-10" />
          </div>

          {/* Icons Follow */}
          <div className="flex gap-[5px]  items-center mt-2">
            {Icons.map((item, index) => {
              return (
                <Link
                  href={item.link}
                  key={index}
                  className="flex flex-col items-center justify-center w-1/4 bg-zinc-700 gap-[5px] p-[5px] rounded-[5px] hover:scale-105 hover:drop-shadow-2xl transition-all ease-in-out duration-300 group"
                >
                  <Image
                    src={item.iconImg}
                    alt="Mohd Aman Ansari"
                    width={30}
                    height={30}
                  />
                  <p className="text-xs text-white/80 group-hover:text-rose-600">
                    {item.name}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostPage;

const Icons = [
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/embed.org.in/',
    iconImg: '/icons/instagram.svg',
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/EmbedOrg',
    iconImg: '/icons/twitter.svg',
  },
  {
    name: 'Github',
    link: 'https://github.com/embeddd',
    iconImg: '/icons/github.svg',
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/company/embeddd/about/',
    iconImg: '/icons/linkedin.svg',
  },
];
