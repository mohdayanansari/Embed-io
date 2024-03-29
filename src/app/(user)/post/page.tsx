import BlogList from '@/components/BlogList';
import MainNavbar from '@/layouts/Navbars/MainNavbar';
import { groq } from 'next-sanity';
import { previewData } from 'next/headers';
import { client } from '../../../../lib/sanity.client';

const query = groq`
*[_type=='post'] {
  ...,
  author->,
  categories[]->,
  body
} | order(_createdAt desc) 
`;

export const revalidate = 60; //seconds

const PostPage = async () => {
  if (previewData()) {
    return (
      <div>preview mode is in development</div>
      // <PreviewSuspense
      //   fallback={
      //     <div role="status">
      //       <p className="text-center text-lg animate-pulse text-[#F7AB0A] ">
      //         Loading Preview Data...
      //       </p>
      //     </div>
      //   }

      // ></PreviewSuspense>
    );
  }
  const posts = await client.fetch(query);
  return (
    <main>
      <div className="bg-[url('/imgs/bg-1.png')] h-[75vh] bg-[0px] bg-cover ">
        <MainNavbar />
      </div>
      <BlogList posts={posts} />
    </main>
  );
};

export default PostPage;
