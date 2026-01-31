"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { products } from "@/data/products";
import ProductCardSecondary from "../ui/ProductCardSecondary";
import { FaChevronLeft, FaChevronRight, FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";


const CARD_WIDTH = 260;
const GAP = 24;

export default function ProductSection() {
  const controls = useAnimation();
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [index, setIndex] = useState(0);

  const maxIndex = products.length - 1;

  /* Move carousel */
  const slideTo = (i: number) => {
    const clamped = Math.max(0, Math.min(i, maxIndex));
    setIndex(clamped);

    controls.start({
      x: -(clamped * (CARD_WIDTH + GAP)),
      transition: { type: "spring", stiffness: 260, damping: 30 },
    });
  };

  /* Auto-focus active card */
  useEffect(() => {
    if (!activeId) return;
    const idx = products.findIndex((p) => p.id === activeId);
    if (idx !== -1) slideTo(idx);
  }, [activeId]);

  return (
    <section className="py-14 px-4 sm:px-6 md:px-16 overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
      >
        <div>
          <h2 className="mb-2 text-2xl sm:text-3xl font-amatic text-[#407B3F]">
            Our Products
          </h2>
          <h1 className="font-arsenal text-3xl sm:text-4xl md:text-5xl max-w-xl">
            Explore our diverse range of products
          </h1>
        </div>
        <div className="flex flex-col items-center md:items-start"> 
        <p className="max-w-md text-sm sm:text-base text-[#82705D]">
          Sustainably sourced, ethically crafted products designed for conscious living.
        </p>
        <Link 
          href="/products" 
          className='mt-4 text-gray-600 transition
                hover:text-green-700
                after:block after:h-[2px] after:w-0 after:bg-green-700
                after:transition-all after:duration-300 hover:after:w-full
        '>
          View All Products <FaArrowRightLong className="inline-block ml-1"/>
        </Link>
        </div> 
      </motion.div>

      {/* Carousel */}
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => slideTo(index - 1)}
          className={`
            hidden sm:flex
            absolute left-0 top-1/2 -translate-y-1/2 z-20
            h-10 w-10 items-center justify-center
            rounded-full bg-green-200 shadow-md
            transition
            ${index === 0 ? "opacity-0 pointer-events-none" : "opacity-100"}
          `}
        >
          <FaChevronLeft size={25}/>
        </button>

        {/* Viewport */}
        <div className="overflow-hidden">
          <motion.div
            ref={trackRef}
            drag="x"
            dragConstraints={{ left: -(maxIndex * (CARD_WIDTH + GAP)), right: 0 }}
            animate={controls}
            className="flex gap-6 cursor-grab active:cursor-grabbing"
          >
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <ProductCardSecondary
                  product={product}
                  activeId={activeId}
                  setActiveId={setActiveId}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => slideTo(index + 1)}
          className={`
            hidden sm:flex
            absolute right-0 top-1/2 -translate-y-1/2 z-20
            h-10 w-10 items-center justify-center
            rounded-full bg-green-200 shadow-md
            transition
            ${index >= maxIndex ? "opacity-0 pointer-events-none" : "opacity-100"}
          `}
        >
          <FaChevronRight size={25}/>
        </button>
      </div>
    </section>
  );
}
