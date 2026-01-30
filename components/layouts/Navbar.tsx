"use client"
import Link from 'next/link'
import React from 'react'



const SearchBar: React.FC = () => {
  return (
    <div>
        <input type="text" placeholder='Search products...' className='border border-gray-400 rounded-full px-4 py-2 w-64 focus:outline-green-800'/>
    </div>
  )
}


const Nav: React.FC = () => {
  return (
    <nav className='flex items-center justify-center gap-5 text-md tracking-wider'>
      <Link href="/">About</Link>
      <Link href="/">Products</Link>
      <Link href="/">Blogs</Link>
      <Link href="/">Contact</Link>
    </nav>
  )
}

const ProductNav: React.FC = () => {
  return (
    <div className='flex items-center justify-center gap-2 md:gap-10 font-semibold text-xs bg-gray-100 py-5 '>
        <Link href="/" className='uppercase text-gray-600'>All products</Link>
        <Link href="/" className='uppercase text-gray-600'>basket</Link>
        <Link href="/" className='uppercase text-gray-600'>coaster</Link>
        <Link href="/" className='uppercase text-gray-600'>home decor</Link>
        <Link href="/" className='uppercase text-gray-600'>sack</Link>
        <Link href="/" className='uppercase text-gray-600'>bags</Link>
        <Link href="/" className='uppercase text-gray-600'>jute products</Link>
        <Link href="/" className='uppercase text-gray-600'>Haycianth Products</Link>
        <Link href="/" className='uppercase text-gray-600'>Cane Products</Link>
      </div>
  )
}

const Navbar = () => {
  return (
    <header className='hidden md:block border-b border-gray-300 shadow-md'>
      <div className="flex justify-around items-center py-5 pb-8 px-40">
        <div className="w-1/3 flex- justify-start">
        <Link href="/">
          <h1 className="text-4xl font-arsenal">Handicraft</h1>
        </Link>
        </div>
        <div className='w-1/3'>
          <Nav />
        </div>
        <div className='w-1/3 flex justify-end'>
          <SearchBar />
        </div> 
      </div>
      <div className=''>
      <ProductNav />
      </div>
    </header>
  )
}

export default Navbar
