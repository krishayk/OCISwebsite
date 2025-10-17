import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Contact',
  description: 'Get in touch with the Official California Innovators Society. Connect with us for workshops, partnerships, and collaboration opportunities.',
  path: '/contact',
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
