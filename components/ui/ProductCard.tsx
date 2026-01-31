"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { memo } from "react"
import { Product } from "@/data/products"

const ProductCard = memo(({ product }: { product: Product }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -6 }}
      className="bg-[#FFF7EF] rounded-xl p-3 shadow-sm hover:shadow-lg transition"
    >
      <Link href={product.slug}>
        <div className="relative aspect-square rounded-lg overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            sizes="(max-width: 768px) 50vw, 25vw"
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
    </motion.article>
  )
})

export default ProductCard
