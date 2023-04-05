import Banner from '@/layouts/Header/Banner';
import Header from '@/layouts/Header/Header';
import '../../styles/Globals.scss';
import '../../styles/Tailwind.css';

export const metadata = {
  title: 'Blog App',
  description: 'This is a blog app for []',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="mx-auto max-w-7xl">
        <Header />
        <Banner />
        {children}
      </body>
    </html>
  );
}
