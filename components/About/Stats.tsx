"use client"

import MotionSection from "./MotionSection"

const stats = [
  { number: "150+", label: "Artisans" },
  { number: "12+", label: "Export Countries" },
  { number: "5 Years", label: "Experience" },
  { number: "5000+", label: "Products Delivered" },
]

export default function Stats() {
  return (
    <MotionSection>
      <div className="bg-green-50 rounded-2xl p-6 md:p-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((item, i) => (
            <div key={i}>
              <p className="text-2xl md:text-3xl font-bold text-green-700">
                {item.number}
              </p>
              <p className="text-sm md:text-base text-gray-600 mt-1">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}
