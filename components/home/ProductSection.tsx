import React from 'react'
import ProductCard from '../ui/ProductCard'
import Button from '../ui/Button'

const ProductSection:React.FC = () => {
  return (
    <section className="py-10 px-6 md:px-30 min-h-[400px]">
      <div className='flex flex-col md:flex-row items-center gap-10 mb-10'>
         <div>
           <h2 className='text-3xl font-amatic mb-4 text-[#407B3F]'>Our Products</h2>
           <h1 className='font-arsenal text-4xl md:text-5xl'>Explore our diverse range of products </h1>
         </div>  
         <div>
            <p className='text-[#82705D] text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sit iusto deleniti ad, consequuntur delectus!</p>
          </div>  
      </div>
      <div className="mt-5 flex items-center gap-5 overflow-x-auto">
        <ProductCard title="Basket"/>
        <ProductCard title="Jute products"/>
        <ProductCard title="Home Decor"/>
        <ProductCard title="Sack"/>
      </div>
      <div className='w-full flex flex-col items-center justify-center'>
        <div className='mt-10'>
          <Button path="/products" name="View our collections" />
        </div>
      </div>
    </section>
  )
}

export default ProductSection
