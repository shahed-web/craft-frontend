import BlogContent from "@/components/blog/BlogContent"
import BlogHero from "@/components/blog/BlogHero"
import ReadingProgress from "@/components/blog/ReadingProgress"
import RelatedBlogs from "@/components/blog/RelatedBlogs"
import { blogs } from "@/data/blog-data"


export default function Page({ params }: { params: { slug: string } }) {
  const blog = blogs.find((b) => b.slug === params.slug)!

  const related = blogs
    .filter((b) => b.category === blog.category && b.slug !== blog.slug)
    .slice(0, 3)

  return (
    <>
      <ReadingProgress />
      <BlogHero title={blog.title} image={blog.image} />

      <main className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-10 space-y-10">
          <BlogContent
            content={blog.content}
            author="Admin"
            date={blog.date}
            image={blog.image}
          />

          <RelatedBlogs blogs={related} />
        </div>
      </main>
    </>
  )
}
