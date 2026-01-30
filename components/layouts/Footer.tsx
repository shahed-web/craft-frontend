import Link from 'next/link'
import React from 'react'

const Footer:React.FC = () => {
  return (
    <footer className='py-10 px-6 md:px-30 min-h-[300px] bg-[#FFF7EF]'>
      <div>
        <div className='flex flex-col md:flex-row gap-8'>
          <div>
            <h1 className="text-4xl text-green-800">Handicraft</h1>
          </div>
          <div>
            <h3 className="text-lg text-green-800 underline underline-offset-8 uppercase">Company info</h3>
            <div className="flex flex-col flex-start gap-1 mt-3">
              <Link href="/">
                About Benubon
              </Link>
              <Link href="/">
                Social Responsibility
              </Link>
              <Link href="/">
                Blogs
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg text-green-800 underline underline-offset-8 uppercase">help & support</h3>
            <div className="flex flex-col flex-start mt-3 gap-1">
              <Link href="/">
                Order policy
              </Link>
              <Link href="/">
                Shipping info
              </Link>
              <Link href="/">
                Size chart
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg text-green-800 underline underline-offset-8 uppercase">Customer support</h3>
            <div className="flex flex-col flex-start mt-3 gap-1">
              <Link href="/">
                Contact us
              </Link>
              <Link href="/">
                Notices
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex items-center justify-between mt-10'>
        other links
        <div>
          <h4 className='font-bold text-[#2C1A00] font-arsenal text-sm'>Copyright @ 2026 Bnubon craft&apos;s all rights reserved</h4>
        </div>
      </div>
    </footer>
  )
}

export default Footer
