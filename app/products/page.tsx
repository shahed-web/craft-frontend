import ProductCard from '@/components/ui/ProductCard'
import React from 'react'

const page: React.FC = () => {
  return (
    <div className='px-6 md:px-40'>
      <div className='w-full py-10'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
          <ProductCard title="Jute products" button={true}/>
          <ProductCard title="Sack"/>
          <ProductCard title="Basket"/>
          <ProductCard title="Home Decor"/>
          <ProductCard title="Jute products"/>
          <ProductCard title="Sack"/>
          <ProductCard title="Home Decor"/>
          <ProductCard title="Sack"/>
          <ProductCard title="Home Decor"/>
          <ProductCard title="Basket"/>
          <ProductCard title="Sack"/>
          <ProductCard title="Jute products"/>
        </div>
      </div>
    </div>
  )
}

export default page
