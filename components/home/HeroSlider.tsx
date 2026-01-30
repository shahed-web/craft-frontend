"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Button from "../ui/Button";

const slides = [
  {
    title: "Redefine sustainable living",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sit iusto deleniti ad, consequuntur delectus!",
    image: "/images/slide-1.jpg",
  },
  {
    title: "Design Meets Performance",
    description:
      "environmental friendly products that do not compromise on style or functionality.",
    image: "/images/slide-2.jpg",
  },
  {
    title: "Hand crafted Quality",
    description:
      "environmental friendly products that do not compromise on style or functionality.",
    image: "/images/slide-2.jpg",
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const startX = useRef<number | null>(null);

  /* ------------------ Auto slide ------------------ */
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  /* ------------------ Swipe logic ------------------ */
  const onTouchStart = (x: number) => {
    startX.current = x;
  };

  const onTouchEnd = (x: number) => {
    if (startX.current === null) return;

    const diff = startX.current - x;

    if (diff > 50) {
      // swipe left
      setActive((prev) => (prev + 1) % slides.length);
    } else if (diff < -50) {
      // swipe right
      setActive((prev) =>
        prev === 0 ? slides.length - 1 : prev - 1
      );
    }

    startX.current = null;
  };

  return (
    <div
      className="relative w-full min-h-100 overflow-hidden"
      onTouchStart={(e) => onTouchStart(e.touches[0].clientX)}
      onTouchEnd={(e) => onTouchEnd(e.changedTouches[0].clientX)}
      onMouseDown={(e) => onTouchStart(e.clientX)}
      onMouseUp={(e) => onTouchEnd(e.clientX)}
    >
      <div className="mx-auto grid min-h-100 max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:px-10">
        {/* LEFT CONTENT */}
        <div className="relative min-h-[400px] overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`
                absolute inset-0 flex flex-col items-start justify-center transition-all duration-1000 ease-out
                ${active === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10 pointer-events-none"}
              `}
            >
              <h1 className="text-3xl mx-auto md:mx-0 text-[#2C1A00] font-arsenal leading-tight sm:text-4xl lg:text-5xl">
                {slide.title}
              </h1>
              <p className="mt-4 max-w-md text-center text-[#82705D] md:text-start font-rosario text-base text-gray-600 sm:text-lg md:text-xl">
                {slide.description}
              </p>
              <div className="mt-5 mx-auto md:mx-0">
              <Button />
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex min-h-[300px] items-center justify-center lg:min-h-[420px]">
          {/* Decorative static div */}
          <div className="absolute right-0 md:left-0 h-[95%] w-[95%] md:w-[95%] md:shadow-lg rounded-2xl bg-green-100 z-0" />

          {slides.map((slide, index) => (
            <div
              key={index}
              className={`
                absolute z-10 transition-all duration-1000 ease-out
                ${active === index
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-50 pointer-events-none"}
              `}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                width={420}
                height={420}
                className="h-auto w-[440px] sm:w-[440px] lg:w-[550px] rounded-2xl"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile pagination dots */}
      {/* <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`h-2 w-2 rounded-full transition
              ${active === index ? "bg-indigo-600" : "bg-gray-300"}
            `}
          />
        ))}
      </div> */}
    </div>
  );
}
