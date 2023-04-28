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
      <body className="">{children}</body>
    </html>
  );
}
