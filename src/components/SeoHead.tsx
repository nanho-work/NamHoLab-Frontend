// src/components/SeoHead.tsx
import Head from 'next/head';

interface SeoHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const defaultTitle = 'NamHoLab | Web. API. Automation.';
const defaultDescription = '작지만 강한 기술 파트너, NamHoLab이 함께합니다.';
const defaultImage = '/og-image.png';
const defaultUrl = 'https://namholab.com';

export default function SeoHead({
  title = defaultTitle,
  description = defaultDescription,
  image = defaultImage,
  url = defaultUrl,
}: SeoHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}