import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface ProductCardProps {
  title?: string
  button?: boolean
}
const ProductCard: React.FC<ProductCardProps> = ({title, button}) => {
  return (
    <div className='bg-[#FFF7EF] rounded-lg p-2'>
      <div>
        <Image
          src='/images/slide-2.jpg'
          alt='Product Image'
          width={800}
          height={800}
          style={{objectFit: "contain", borderRadius:"5px", width:"100%", height: "100%"}}
        />
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h3 className='font-arsenal text-xl text-center mt-2'>{title}</h3>
        {button && (<Link href="/products/1" className='mx-0 text-sm text-green-800 text-center mt-1'>View Details</Link>)}
      </div>
    </div>
  )
}

export default ProductCard
