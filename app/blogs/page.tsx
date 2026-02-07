import BlogGrid from "@/components/blog/BlogGrid"
import MotionSection from "@/components/blog/MotionWrapper"


export default function Page() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-10">
        <MotionSection>
          <h1 className="text-3xl md:text-4xl font-arsenal mb-6">
            Our Blog
          </h1>

          <BlogGrid />
        </MotionSection>
      </div>
    </main>
  )
}
