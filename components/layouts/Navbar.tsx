"use client"

import Link from "next/link"
import React, { useState } from "react"
import { FiSearch, FiMenu, FiX } from "react-icons/fi"
import { motion, AnimatePresence } from "framer-motion"

/* ---------------- Data ---------------- */

const mainNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
]

const productCategories = [
  "All Products",
  "Basket",
  "Coaster",
  "Home Decor",
  "Sack",
  "Bags",
  "Jute Products",
  "Hyacinth Products",
  "Cane Products",
]

/* ---------------- Components ---------------- */

const SearchBar = ({ fullWidth = false }: { fullWidth?: boolean }) => {
  return (
    <div className={`relative ${fullWidth ? "w-full" : "w-64"}`}>
      <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

      <input
        type="text"
        placeholder="Search products..."
        className="
          w-full rounded-full border border-gray-300
          py-2 pl-11 pr-4 text-sm
          focus:border-green-700 focus:outline-none
          focus:ring-2 focus:ring-green-700/20
        "
      />
    </div>
  )
}

const MainNav = ({ onClick }: { onClick?: () => void }) => {
  return (
    <ul className="flex flex-col md:flex-row md:items-center gap-5 md:gap-6 text-sm font-medium tracking-wide">
      {mainNav.map((item) => (
        <li key={item.label}>
          <Link
            href={item.href}
            onClick={onClick}
            className="text-gray-700 transition hover:text-green-700"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

const ProductNav = () => {
  return (
    <nav
      aria-label="Product categories"
      className="border-t border-gray-200 bg-gray-50"
    >
      {/* Mobile: horizontal scroll */}
      <div className="overflow-x-auto">
        <ul className="flex md:flex-wrap min-w-max md:min-w-0 items-center md:justify-center gap-x-6 md:gap-x-8 gap-y-3 px-4 md:px-6 py-3 text-[11px] font-semibold uppercase tracking-wider">
          {productCategories.map((category) => (
            <li key={category}>
              <Link
                href={`/products?category=${encodeURIComponent(category)}`}
                className="
                  whitespace-nowrap
                  text-gray-600 transition
                  hover:text-green-700
                  after:block after:h-[2px] after:w-0 after:bg-green-700
                  after:transition-all after:duration-300 hover:after:w-full
                "
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

/* ---------------- Navbar ---------------- */

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6 py-4 md:py-5">
        {/* Logo */}
        <Link href="/" className="text-2xl md:text-3xl font-arsenal">
          Handicraft
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:block">
          <MainNav />
        </div>

        {/* Desktop Search */}
        <div className="hidden md:block">
          <SearchBar />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-gray-200 overflow-hidden"
          >
            <div className="px-4 py-5 space-y-5 bg-white">
              <MainNav onClick={() => setOpen(false)} />

              {/* Mobile Search */}
              <SearchBar fullWidth />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Product Categories (responsive) */}
      <ProductNav />
    </header>
  )
}

export default Navbar
