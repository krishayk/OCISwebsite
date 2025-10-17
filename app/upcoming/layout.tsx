import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Upcoming Workshops',
  description: 'Stay updated on upcoming OCIS workshops including CIVIC Innovation, focusing on community and civic challenges.',
  path: '/upcoming',
});

export default function UpcomingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
