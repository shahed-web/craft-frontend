"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { products } from "@/data/products";
import ProductCardSecondary from "../ui/ProductCardSecondary";

export default function ProductSection() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  /* Auto scroll */
  useEffect(() => {
    if (paused || activeId) return;

    const id = setInterval(() => {
      if (!containerRef.current) return;

      containerRef.current.scrollBy({
        left: 240,
        behavior: "smooth",
      });

      // loop back
      if (
        containerRef.current.scrollLeft +
          containerRef.current.clientWidth >=
        containerRef.current.scrollWidth
      ) {
        containerRef.current.scrollTo({ left: 0 });
      }
    }, 3000);

    return () => clearInterval(id);
  }, [paused, activeId]);

  return (
    <section className="py-12 px-6 md:px-20">
      {/* Header */}
      <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="mb-2 text-3xl font-amatic text-[#407B3F]">
            Our Products
          </h2>
          <h1 className="font-arsenal text-4xl md:text-5xl">
            Explore our diverse range of products
          </h1>
        </div>

        <p className="max-w-md text-[#82705D]">
          Sustainably sourced, ethically crafted products designed for
          conscious living.
        </p>
      </div>

      {/* Carousel */}
      <motion.div
        ref={containerRef}
        layout
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="flex gap-6 justify-between overflow-none scroll-smooth pb-6"
      >
        {products.map((product) => (
          <ProductCardSecondary
            key={product.id}
            product={product}
            activeId={activeId}
            setActiveId={setActiveId}
          />
        ))}
      </motion.div>

    </section>
  );
}
