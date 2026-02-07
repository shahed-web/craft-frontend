import MotionSection from "./MotionSection"
import Link from "next/link"

export default function CTA() {
  return (
    <MotionSection>
      <div className="bg-green-700 text-white rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-arsenal mb-4">
          Partner With Us
        </h2>

        <p className="max-w-xl mx-auto mb-6 text-sm md:text-base opacity-90">
          Looking for reliable handmade product suppliers? Let’s work together to bring sustainable craftsmanship to your market.
        </p>

        <Link
          href="/contact"
          className="inline-block bg-white text-green-700 font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Contact Us
        </Link>
      </div>
    </MotionSection>
  )
}
