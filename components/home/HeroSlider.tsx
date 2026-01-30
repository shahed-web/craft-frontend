"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Button from "../ui/Button";

type Slide = {
  title: string;
  description: string;
  image: string;
};

const slides: Slide[] = [
  {
    title: "Redefine Sustainable Living",
    description:
      "Beautifully crafted eco-friendly products designed for modern homes.",
    image: "/images/slide-1.jpg",
  },
  {
    title: "Design Meets Performance",
    description:
      "Sustainable materials without compromising style or durability.",
    image: "/images/slide-2.jpg",
  },
  {
    title: "Handcrafted With Purpose",
    description:
      "Ethically made products that support artisans and the planet.",
    image: "/images/slide-1.jpg",
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -60 : 60,
    opacity: 0,
  }),
};

export default function HeroSlider() {
  const [[active, direction], setActive] = useState<[number, number]>([0, 1]);
  const [paused, setPaused] = useState(false);

  /* Auto slide */
  useEffect(() => {
    if (paused) return;

    const id = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(id);
  }, [paused]);

  const paginate = (dir: number) => {
    setActive(([prev]) => [
      (prev + dir + slides.length) % slides.length,
      dir,
    ]);
  };

  const slide = slides[active];

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto grid min-h-[60vh] max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={active}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-start justify-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-arsenal text-[#2C1A00] sm:text-5xl"
            >
              {slide.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 max-w-md font-rosario text-lg text-[#82705D]"
            >
              {slide.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6"
            >
              <Button label="Shop Collection" />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* RIGHT IMAGE */}
        <div className="relative flex h-[420px] items-center justify-center">
          <div className="absolute inset-0 rounded-2xl bg-green-100" />

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative z-10 h-full w-full"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-2xl object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive([i, i > active ? 1 : -1])}
            className={`h-2.5 w-2.5 rounded-full transition
              ${i === active ? "bg-green-700" : "bg-green-300"}
            `}
          />
        ))}
      </div>
    </div>
  );
}
