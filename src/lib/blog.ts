// src/lib/blog.ts
import { marked } from 'marked';
import { blogPosts } from '@/data/blogPosts';

export interface BlogPost {
  title: string;
  date: string;
  slug: string;
  content: string;
  summary: string;
}

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost & { htmlContent: string } | null {
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return null;

  return {
    ...post,

    htmlContent: String(marked.parse(post.content)),
    } as BlogPost & { htmlContent: string };
}