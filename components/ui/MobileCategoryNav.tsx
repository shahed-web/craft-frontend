"use client"

interface Props {
  categories: string[]
  active: string
  onChange: (category: string) => void
}

const MobileCategoryNav: React.FC<Props> = ({
  categories,
  active,
  onChange,
}) => {
  return (
    <div className="md:hidden sticky top-0 z-40 bg-white border-b">
      <div className="flex gap-3 overflow-x-auto px-4 py-3 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm transition
              ${
                active === cat
                  ? "bg-green-700 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  )
}

export default MobileCategoryNav
