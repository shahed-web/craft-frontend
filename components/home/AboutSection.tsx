import Image from "next/image";
import React from "react";
import {
  FaHandHoldingHand,
  FaLeaf,
  FaRecycle,
  FaRegThumbsUp,
} from "react-icons/fa6";

type AboutItem = {
  title: string;
  description: string;
  icon: React.ReactNode;
  highlight?: boolean;
};

const aboutItems: AboutItem[] = [
  {
    title: "Our Mission",
    description:
      "We aim to create meaningful, sustainable products that empower artisans.",
    icon: <FaRegThumbsUp size={22} />,
    highlight: true,
  },
  {
    title: "Handmade",
    description:
      "Each product is carefully handcrafted using traditional techniques.",
    icon: <FaHandHoldingHand size={22} />,
  },
  {
    title: "Sustainable",
    description:
      "We use eco-friendly materials to reduce environmental impact.",
    icon: <FaRecycle size={22} />,
  },
  {
    title: "Natural Materials",
    description:
      "Crafted using renewable fibers like jute and natural fabrics.",
    icon: <FaLeaf size={22} />,
    highlight: true,
  },
];

const AboutContent: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {aboutItems.map((item, index) => (
        <div key={index} className="flex gap-4">
          {/* Icon */}
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full
              ${
                item.highlight
                  ? "bg-green-800 text-white"
                  : "bg-white text-green-800"
              }
            `}
          >
            {item.icon}
          </div>

          {/* Text */}
          <div>
            <h3 className="text-lg font-rosario text-green-100">
              {item.title}
            </h3>
            <p className="mt-1 text-sm text-green-100/80 font-rosario">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const AboutSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="flex flex-col gap-10 rounded-br-[3rem] bg-gradient-to-r from-green-700 to-green-600 px-6 py-12 md:flex-row md:px-20 lg:rounded-br-[5rem]">
        {/* Image */}
        <div className="relative mx-auto w-full max-w-sm md:w-1/2 lg:w-1/3">
          <Image
            src="/images/about-section.png"
            width={500}
            height={500}
            alt="About us"
            className="h-auto w-full object-contain"
            priority
          />
        </div>

        {/* Content */}
        <div className="flex w-full flex-col justify-center gap-6 md:w-1/2 lg:w-2/3">
          <h2 className="text-xl font-amatic uppercase tracking-widest text-[#FFF7EF]">
            What we do
          </h2>

          <h1 className="text-4xl font-arsenal text-green-100 md:text-5xl">
            Sustainable Handicraft Products
          </h1>

          <p className="max-w-2xl font-rosario text-[#FFF7EF]/90">
            We create eco-conscious handicraft products that blend traditional
            craftsmanship with modern design — supporting artisans and
            protecting the planet.
          </p>

          <AboutContent />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;