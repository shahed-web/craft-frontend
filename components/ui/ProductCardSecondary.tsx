"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Props = {
  product: {
    id: string;
    title: string;
    image: string;
    description: string;
    slug: string;
  };
  activeId: string | null;
  setActiveId: (id: string | null) => void;
};

export default function ProductCardSecondary({
  product,
  activeId,
  setActiveId,
}: Props) {
  const isActive = activeId === product.id;

  return (
    <motion.div
      layout
      onClick={() => setActiveId(isActive ? null : product.id)}
      className={`
        w-[220px] sm:w-[260px]
        rounded-xl bg-white p-3 cursor-pointer
        transition-shadow
        ${isActive ? "shadow-xl scale-[1.02]" : "shadow-md"}
      `}
    >
      <motion.div layout className="relative h-[160px] sm:h-[200px] rounded-lg overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover"
        />
      </motion.div>

      <motion.h3 layout className="mt-3 text-center font-arsenal text-base sm:text-lg">
        {product.title}
      </motion.h3>

      {isActive && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-3 text-center"
        >
          <p className="mb-3 text-xs sm:text-sm text-[#82705D]">
            {product.description}
          </p>

          <Link
            href={product.slug}
            className="inline-block rounded-md px-4 py-2 text-xs sm:text-sm
              border border-green-700 text-green-700
              hover:bg-green-700 hover:text-white transition"
          >
            View Details
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
}
