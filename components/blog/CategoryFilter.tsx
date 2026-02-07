"use client"

import { useState } from "react"

export default function CategoryFilter({
  categories,
  onChange,
}: {
  categories: string[]
  onChange: (category: string) => void
}) {
  const [active, setActive] = useState("All")

  const handleClick = (cat: string) => {
    setActive(cat)
    onChange(cat)
  }

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {["All", ...categories].map((cat) => (
        <button
          key={cat}
          onClick={() => handleClick(cat)}
          className={`px-4 py-1 rounded-full text-sm border transition ${
            active === cat
              ? "bg-green-700 text-white"
              : "bg-white hover:bg-gray-100"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
