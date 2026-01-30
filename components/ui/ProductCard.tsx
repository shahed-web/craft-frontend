"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Product } from "@/data/products"
import { cardVariants } from "@/lib/motion"

interface Props {
  product: Product
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6 }}
      className="bg-[#FFF7EF] rounded-xl p-3 shadow-sm hover:shadow-lg transition"
    >
      <Link href={product.slug}>
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div className="mt-3 text-center">
          <h3 className="font-arsenal text-lg font-semibold">
            {product.title}
          </h3>

          <p className="text-xs text-gray-600 mt-1 line-clamp-2">
            {product.description}
          </p>

          <span className="inline-block mt-2 text-sm text-green-800 font-medium">
            View Details →
          </span>
        </div>
      </Link>
    </motion.div>
  )
}

export default ProductCard
