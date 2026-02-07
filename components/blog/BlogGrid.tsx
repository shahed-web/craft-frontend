"use client"

import { useState } from "react"
import BlogCard from "./BlogCard"
import CategoryFilter from "./CategoryFilter"
import { blogs as allBlogs} from "@/data/blog-data"

export default function BlogGrid() {
  const categories = Array.from(new Set(allBlogs.map((b) => b.category)))
  const [filtered, setFiltered] = useState(allBlogs)

  const handleFilter = (cat: string) => {
    if (cat === "All") setFiltered(allBlogs)
    else setFiltered(allBlogs.filter((b) => b.category === cat))
  }

  return (
    <>
      <CategoryFilter categories={categories} onChange={handleFilter} />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </div>
    </>
  )
}
