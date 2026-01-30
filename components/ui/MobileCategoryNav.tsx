"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const categories = [
  { label: "All", slug: "/products" },
  { label: "Baskets", slug: "/products/basket" },
  { label: "Jute", slug: "/products/jute" },
  { label: "Sacks", slug: "/products/sack" },
  { label: "Decor", slug: "/products/decor" },
  { label: "Cane", slug: "/products/cane" },
]

const MobileCategoryNav = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="md:hidden mb-6 overflow-x-auto"
    >
      <div className="flex gap-3 whitespace-nowrap px-1">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={cat.slug}
            className="px-4 py-2 rounded-full text-sm font-medium
              bg-[#FFF7EF] text-green-800 border border-green-200
              active:scale-95 transition"
          >
            {cat.label}
          </Link>
        ))}
      </div>
    </motion.div>
  )
}

export default MobileCategoryNav
