import Image from 'next/image';
import Link from 'next/link';
import urlFor from '../../lib/urlFor';

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full m-10 mx-auto h-96">
          <Image
            className="object-cover"
            src={urlFor(value).url()}
            alt="Blog Post Image"
            fill
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="py-5 ml-10 space-y-5 text-white list-disc">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal mt-lg">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="py-10 text-5xl font-bold text-white">
        {children}
        <hr className="mt-2 text-white/10 bg-white/10 opacity-10" />
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="py-10 text-4xl font-bold text-white">
        {children}
        <hr className="mt-2 text-white/10 bg-white/10 opacity-10" />
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="py-10 text-3xl font-bold text-white">
        {children}
        <hr className="mt-2 text-white/10 bg-white/10 opacity-10" />
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="py-10 text-2xl font-bold text-white">{children}</h4>
    ),
    h5: ({ children }: any) => (
      <h5 className="py-10 text-xl font-bold text-white">{children}</h5>
    ),
    h6: ({ children }: any) => (
      <h6 className="py-10 text-lg font-bold text-white">{children}</h6>
    ),
    p: ({ children }: any) => <p className="text-sm text-white">{children}</p>,
    normal: ({ children }: any) => (
      <p className="text-[16px] leading-8 text-justify text-white/80">
        {children}
      </p>
    ),

    blockquote: ({ children }: any) => (
      <blockquote className="flex items-start gap-2 p-10 my-10 text-5xl font-bold text-white uppercase border-l-4 border-l-app1 bg-zinc-800 drop-shadow-xl">
        <Image
          src={'/icons/quote.svg'}
          alt="Mohd Ayan Ansari Blogs"
          width={40}
          height={40}
          color="#fff"
          className="text-white"
        />
        {children}
      </blockquote>
    ),
  },

  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/')
        ? 'noreferrer noopener'
        : undefined;
      return (
        <Link
          href={value.href}
          rel={rel}
          className="font-bold transition-all duration-300 ease-in-out hover:underline decoration-rose-500 hover:decoration-black text-rose-600 hover:bg-app2 hover:text-app1 hover:p-2 animate-pulse hover:animate-none"
        >
          🔗 {children}
        </Link>
      );
    },
  },
};
