import Header from '@/layouts/Header/Header';

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="">
      <Header />
      {/* <Banner /> */}
      {children}
    </section>
  );
}
