"use client";

import Link from "next/link";
import React from "react";
import { FiSearch } from "react-icons/fi";

/* ---------------- Data ---------------- */

const mainNav = [
  { label: "About", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

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
];

/* ---------------- Components ---------------- */

const SearchBar: React.FC = () => {
  return (
    <div className="relative w-64">
      <label htmlFor="search" className="sr-only">
        Search products
      </label>

      <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

      <input
        id="search"
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
  );
};

const MainNav: React.FC = () => {
  return (
    <nav aria-label="Main navigation">
      <ul className="flex items-center justify-center gap-6 text-sm font-medium tracking-wide">
        {mainNav.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="text-gray-700 transition hover:text-green-700"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const ProductNav: React.FC = () => {
  return (
    <nav
      aria-label="Product categories"
      className="border-t border-gray-200 bg-gray-50"
    >
      <ul className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-6 py-4 text-[11px] font-semibold uppercase tracking-wider">
        {productCategories.map((category) => (
          <li key={category}>
            <Link
              href={`/products?category=${encodeURIComponent(category)}`}
              className="
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
    </nav>
  );
};

/* ---------------- Navbar ---------------- */

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 hidden bg-white shadow-sm md:block">
      {/* Top bar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <Link href="/" className="text-3xl font-arsenal">
          Handicraft
        </Link>

        {/* Main Nav */}
        <MainNav />

        {/* Search */}
        <SearchBar />
      </div>

      {/* Product categories */}
      <ProductNav />
    </header>
  );
};

export default Navbar;
