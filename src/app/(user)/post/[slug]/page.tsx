import { RichTextComponents } from '@/components/RichTextComponents';
import { PortableText } from '@portabletext/react';
import { groq } from 'next-sanity';
import Image from 'next/image';
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
    <article className="px-10 pb-28">
      <section className="space-y-2 text-white border border-app1">
        <div className="relative flex flex-col justify-between min-h-56 md:flex-row ">
          <div className="absolute top-0 w-full h-full p-10 opacity-10 blur-sm">
            <Image
              className="object-cover object-center mx-auto"
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
            />
          </div>
          <section className="w-full p-5 bg-app1">
            <div className="flex flex-col justify-between md:flex-row gap-y-5">
              <div>
                <h1 className="text-4xl font-extrabold">{post.title}</h1>
                <p>
                  {new Date(post._createdAt).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
              </div>
              {/* author info */}
              <div className="flex items-center space-x-2 ">
                <Image
                  className="rounded-full"
                  src={urlFor(post.author.image).url()}
                  alt={post.author.name}
                  height={40}
                  width={40}
                />
                <div className="w-64">
                  <h3 className="text-lg font-bold">{post.author.name}</h3>
                  <div>{/* Author Bio */}</div>
                </div>
              </div>
            </div>

            {/* post description */}
            <div className="">
              <h2 className="pt-10 italic">{post.description}</h2>
              {/* categories */}
              <div className="flex items-center justify-end mt-auto space-x-2 ">
                {post.categories.map((category: any) => (
                  <p
                    key={category._id}
                    className="px-3 py-1 mt-4 text-sm font-semibold text-white bg-gray-800 rounded-full"
                  >
                    {category.title}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      <PortableText value={post.body} components={RichTextComponents} />
    </article>
  );
};

export default PostPage;
