import Link from 'next/link'
import React from 'react'

const CategoryNav:React.FC = () => {
  return (
    <div className='flex items-center gap-5'>
      <Link href="/products/">All</Link>
      <Link href="/products/basket">basket</Link>
      <Link href="/products/bags">bags</Link>
      <Link href="/products/sacks">sacks</Link>
      <Link href="/products/jute">jute products</Link>
      <Link href="/products/cane">cane products</Link>
    </div>
  )
}

export default CategoryNav
