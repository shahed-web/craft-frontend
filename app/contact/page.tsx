"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import ContactForm from "@/components/contact/ContactForm";


const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" as const },
  },
};

const socialLinks = [
  { icon: <FaFacebook />, href: "/", label: "Facebook" },
  { icon: <FaInstagram />, href: "/", label: "Instagram" },
  { icon: <FaLinkedin />, href: "/", label: "LinkedIn" },
];

const page: React.FC = () => {
  return (
    <section className="bg-white px-6 py-16 md:px-20 lg:px-40">
      <motion.div
        className="mx-auto flex max-w-7xl flex-col gap-14 md:flex-row md:items-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Left content */}
        <motion.div
          variants={item}
          className="flex w-full flex-col gap-6 md:w-1/2"
        >
          <h2 className="font-amatic text-xl uppercase tracking-widest text-[#407B3F]">
            Contact
          </h2>

          <h1 className="font-arsenal text-4xl md:text-5xl">
            Get in Touch
          </h1>

          <p className="max-w-md text-[#82705D]">
            Have questions about our products or want to collaborate?
            Drop us a message — we usually reply within 24 hours.
          </p>

          <div className="flex gap-4">
            {socialLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="
                  flex h-11 w-11 items-center justify-center
                  rounded-full border border-green-800/20
                  text-green-800 transition
                  hover:bg-green-800 hover:text-white
                "
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Right form */}
        <motion.div
          variants={item}
          className="w-full md:w-1/2"
        >
          <ContactForm />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default page;
