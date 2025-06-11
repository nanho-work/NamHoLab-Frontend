// src/app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/lib/blog';
import SeoHead from '@/components/SeoHead';

interface Props {
  params: { slug: string };
}

export default function BlogDetailPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <SeoHead title={post.title} description={post.summary} />
      <article>
        <h1 className="text-3xl font-bold text-blue-900 mb-2">{post.title}</h1>
        <p className="text-sm text-gray-500 mb-8">{post.date}</p>
        <div
          className="prose prose-blue"
          dangerouslySetInnerHTML={{ __html: post.htmlContent }}
        />
      </article>
    </main>
  );
}