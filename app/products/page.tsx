"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { products } from "@/data/products"
import ProductCard from "@/components/ui/ProductCard"
import MobileCategoryNav from "@/components/ui/MobileCategoryNav"
import { containerVariants } from "@/lib/motion"
import { useMounted } from "@/hooks/useMounted"
import { productCategories } from "@/data/categories"


const Page = () => {
  const mounted = useMounted()
  const [activeCategory, setActiveCategory] = useState("All Products")

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All Products") return products

    return products.filter((p) =>
      p.title.toLowerCase().includes(activeCategory.toLowerCase())
    )
  }, [activeCategory])

  if (!mounted) return null // ✅ hydration-safe

  return (
    <>
      <MobileCategoryNav
        categories={productCategories}
        active={activeCategory}
        onChange={setActiveCategory}
      />

      <section className="px-6 md:px-40 py-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </section>
    </>
  )
}

export default Page
