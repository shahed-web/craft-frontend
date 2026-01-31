"use client"

import { motion } from "framer-motion"
import ProductCard from "@/components/ui/ProductCard"
import { products } from "@/data/products"

export default function RelatedProductsCarousel() {
  return (
    <motion.div
      className="overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.div
        drag="x"
        dragConstraints={{ left: -800, right: 0 }}
        className="flex gap-4 cursor-grab active:cursor-grabbing"
      >
        {products.map((product) => (
          <div key={product.id} className="min-w-[220px] sm:min-w-[260px]">
            <ProductCard product={product} />
          </div>
        ))}
      </motion.div>
    </motion.div>
  )
}
