import { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  path?: string;
}

export function generateMetadata({ title, description, path = '' }: SEOProps): Metadata {
  const fullTitle = `${title} | Official California Innovators Society`;
  const url = `https://ocis.org${path}`;

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: 'Official California Innovators Society',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: fullTitle,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
