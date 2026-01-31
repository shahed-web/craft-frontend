"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Product } from "@/data/products"

interface Props {
  product: Product
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="bg-[#FFF7EF] rounded-xl p-3 shadow-sm hover:shadow-lg transition"
    >
      <Link href={product.slug}>
        {/* Image */}
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        </div>

        {/* Content */}
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
