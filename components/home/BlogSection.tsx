'use client'

import React from 'react'
import { motion } from 'framer-motion'
import BlogCard from '../ui/BlogCard'
import { blogs } from '@/data/blog'
import { FaArrowRightLong } from 'react-icons/fa6'
import Link from 'next/link'

const BlogSection: React.FC = () => {
  return (
    <section className="bg-neutral-50 px-4 py-14 sm:px-6 md:px-12 lg:px-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl text-center"
      >
        <h1 className="font-arsenal text-3xl sm:text-4xl md:text-5xl">
          News & Events
        </h1>
        <p className="mt-3 text-sm sm:text-base text-neutral-600">
          Stories, insights, and updates from the world of sustainable jute craftsmanship.
        </p>
      </motion.div>

      {/* Blog Grid */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="
          mx-auto mt-10 max-w-7xl
          grid grid-cols-1
          gap-6
          sm:grid-cols-2 sm:gap-8
          lg:grid-cols-3 lg:gap-10
        "
      >
        {blogs.slice(0, 3).map((blog, index) => (
          <BlogCard key={blog.id} blog={blog} index={index} />
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25 }}
        className="mt-12 flex justify-center"
      >
        <Link 
          href="/products" 
          className='mt-4 text-gray-600 transition
                hover:text-green-700
                after:block after:h-[2px] after:w-0 after:bg-green-700
                after:transition-all after:duration-300 hover:after:w-full
        '>
          Read more News and blogs <FaArrowRightLong className="inline-block ml-1"/>
        </Link>
      </motion.div>
    </section>
  )
}

export default BlogSection
