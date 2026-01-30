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
      className={`relative cursor-pointer rounded-xl  p-3
        ${isActive ? "z-20 w-[320px]" : "w-[220px]"}
      `}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <motion.div layout className="relative h-[200px] w-full">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="rounded-lg object-cover"
        />
      </motion.div>

      <motion.h3
        layout
        className="mt-3 text-center font-arsenal text-xl"
      >
        {product.title}
      </motion.h3>

      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="mt-3 text-center"
        >
          <p className="mb-3 text-sm text-[#82705D]">
            {product.description}
          </p>

          <Link
            href={product.slug}
            className="inline-block rounded-md text-green-700 px-4 py-2 text-sm bg-white border border-green-700 hover:bg-green-700 hover:text-white transition"
          >
            View Details
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
}
