import { BlogData } from "@/data/blog-data"
import BlogCard from "./BlogCard"
import MotionSection from "./MotionWrapper"


export default function RelatedBlogs({ blogs }: { blogs: BlogData[] }) {
  return (
    <MotionSection>
      <section>
        <h2 className="text-xl md:text-2xl font-arsenal mb-4">
          Related Articles
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>
      </section>
    </MotionSection>
  )
}
