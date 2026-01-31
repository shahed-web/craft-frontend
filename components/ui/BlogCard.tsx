'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Blog } from '@/data/blog'

type Props = {
  blog: Blog
  index: number
}

const BlogCard: React.FC<Props> = ({ blog, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="
        group w-full
        overflow-hidden rounded-2xl
        border border-neutral-200
        bg-white
        shadow-sm
        active:scale-[0.98]
        sm:hover:shadow-xl
        transition
      "
    >
      {/* Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover sm:group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col gap-2">
        <span className="text-xs text-neutral-500">
          {new Date(blog.date).toDateString()}
        </span>

        <h3 className="text-base sm:text-lg font-semibold leading-snug">
          {blog.title}
        </h3>

        <p className="text-sm text-neutral-600 line-clamp-2">
          {blog.description}
        </p>

        <Link
          href={blog.slug}
          className="
            mt-3 inline-flex items-center gap-1
            text-sm font-medium text-emerald-700
            focus:outline-none focus:ring-2 focus:ring-emerald-500
          "
        >
          Read More →
        </Link>
      </div>
    </motion.article>
  )
}

export default BlogCard
