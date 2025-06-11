// src/components/BlogCard.tsx
import Link from 'next/link';
import type { BlogPost } from '@/lib/blog';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block border rounded-lg p-6 bg-white shadow hover:shadow-md transition"
    >
      <h3 className="text-xl font-bold text-blue-900 mb-2">{post.title}</h3>
      <p className="text-gray-600 text-sm mb-3">{post.summary}</p>
      <p className="text-gray-400 text-xs">{post.date}</p>
    </Link>
  );
}