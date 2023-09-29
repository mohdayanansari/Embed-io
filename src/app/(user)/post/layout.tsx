export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-dark">
      {/* <Banner /> */}
      {children}
    </section>
  );
}
