import React from 'react'
import BlogCard from '../ui/BlogCard'
import Button from '../ui/Button'

const BlogSection:React.FC = () => {
  return (
    <section className='py-10 px-6 md:px-30 min-h-[400px]'>
      <div className="w-full max-w-180 mx-auto">
        <h1 className='text-center font-arsenal text-4xl md:text-5xl'>News & Events </h1>
        <p className='my-5 text-center text-[#82705D]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, corporis! Consequuntur recusandae dolorem a velit.</p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-around gap-10 overflow-x-auto py-10">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <div className='w-full flex flex-col items-center justify-center'>
        <div className='mt-5'>
          <Button />
        </div>
      </div>
    </section>
  )
}

export default BlogSection
