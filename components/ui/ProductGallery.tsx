"use client"

import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"

export default function ProductGallery({ images }: { images: string[] }) {
  const [active, setActive] = useState(images[0])

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full"
    >
      {/* Main Image */}
      <div className="relative w-full h-[320px] sm:h-[380px] lg:h-[420px] rounded-xl overflow-hidden bg-gray-100">
        <Image
          src={active}
          alt="Product image"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Thumbnails */}
      <div className="mt-4 flex gap-3 overflow-x-auto">
        {images.map((img) => (
          <button
            key={img}
            onClick={() => setActive(img)}
            className={`relative h-16 w-16 flex-shrink-0 rounded-lg overflow-hidden border
              ${active === img ? "border-black" : "border-transparent"}`}
          >
            <Image src={img} alt="" fill className="object-cover" />
          </button>
        ))}
      </div>
    </motion.div>
  )
}
