"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  FaHandHoldingHand,
  FaLeaf,
  FaRecycle,
  FaRegThumbsUp,
} from "react-icons/fa6";

/* ---------------- animation variants ---------------- */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const imageReveal = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeInOut" },
  },
};

/* ---------------- data ---------------- */

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

/* ---------------- AboutContent ---------------- */

const AboutContent: React.FC = () => {
  return (
    <motion.div
      className="grid grid-cols-1 gap-6 sm:grid-cols-2"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {aboutItems.map((item, index) => (
        <motion.div
          key={index}
          variants={fadeUp}
          className="flex gap-4"
        >
          {/* Icon */}
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full
              ${
                item.highlight
                  ? "bg-green-800 text-white"
                  : "bg-white text-green-800"
              }`}
          >
            {item.icon}
          </div>

          {/* Text */}
          <div>
            <h3 className="text-lg font-rosario text-green-100">
              {item.title}
            </h3>
            <p className="mt-1 text-sm font-rosario text-green-100/80">
              {item.description}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

/* ---------------- AboutSection ---------------- */

const AboutSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      <motion.div
        className="flex flex-col gap-10 rounded-br-[3rem] bg-green-700 px-6 py-12 md:flex-row md:px-20 lg:rounded-br-[5rem]"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Image */}
        <motion.div
          variants={imageReveal}
          className="relative mx-auto w-full max-w-sm md:w-1/2 lg:w-1/3"
        >
          <Image
            src="/images/about-section.png"
            width={500}
            height={500}
            alt="About us"
            className="h-auto w-full object-contain"
            priority
          />
        </motion.div>

        {/* Content */}
        <motion.div
          variants={container}
          className="flex w-full flex-col justify-center gap-6 md:w-1/2 lg:w-2/3"
        >
          <motion.h2
            variants={fadeUp}
            className="text-xl font-amatic uppercase tracking-widest text-[#FFF7EF]"
          >
            What we do
          </motion.h2>

          <motion.h1
            variants={fadeUp}
            className="text-4xl font-arsenal text-green-100 md:text-5xl"
          >
            Sustainable Handicraft Products
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="max-w-2xl font-rosario text-[#FFF7EF]/90"
          >
            We create eco-conscious handicraft products that blend traditional
            craftsmanship with modern design — supporting artisans and
            protecting the planet.
          </motion.p>

          <AboutContent />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
