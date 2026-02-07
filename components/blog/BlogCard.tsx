import { BlogData } from "@/data/blog-data"
import Image from "next/image"
import Link from "next/link"



export default function BlogCard({ blog }: { blog: BlogData }) {
  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
    >
      <div className="relative w-full h-48">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover group-hover:scale-105 transition"
        />
      </div>

      <div className="p-4 space-y-2">
        <span className="text-xs text-green-700 font-medium">
          {blog.category}
        </span>

        <h3 className="font-semibold text-sm md:text-base group-hover:text-green-700">
          {blog.title}
        </h3>

        <p className="text-xs text-gray-500">{blog.date}</p>
      </div>
    </Link>
  )
}
