import Image from "next/image"
import AboutDetailsPost from "@/components/ui/AboutDetailsPost"
import MotionSection from "./MotionSection"

const content = `
<p>We work with rural artisans across Bangladesh to create sustainable handmade products using natural materials like jute and cotton.</p>
<p>Our mission is to preserve traditional craftsmanship while providing fair income opportunities and connecting local talent to international buyers.</p>
`

export default function Story() {
  return (
    <MotionSection>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-arsenal mb-4">
            Who We Are
          </h2>
          <AboutDetailsPost content={content} />
        </div>

        <Image
          src="/images/about4.jpg"
          alt="Team"
          width={600}
          height={400}
          className="w-full h-auto rounded-xl shadow-md object-cover"
        />
      </div>
    </MotionSection>
  )
}
