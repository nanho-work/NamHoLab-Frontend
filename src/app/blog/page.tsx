import { getAllPosts,  BlogPost } from '@/lib/blog';
import BlogCard from '@/components/BlogCard';
import SeoHead from '@/components/SeoHead';

export default async function BlogListPage() {
  const posts = await getAllPosts();

  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <SeoHead title="NamHoLab 블로그" description="개발과 프로젝트에 대한 기록입니다." />
      <h1 className="text-3xl font-bold text-blue-900 mb-10 text-center">NamHoLab 블로그</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </main>
  );
}