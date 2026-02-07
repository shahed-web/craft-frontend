import Image from "next/image"
import AboutDetailsPost from "@/components/ui/AboutDetailsPost"
import MotionSection from "./MotionWrapper"

interface Props {
  content: string
  author: string
  date: string
  image: string
}

export default function BlogContent({
  content,
  author,
  date,
  image,
}: Props) {
  return (
    <MotionSection>
      <article className="bg-white rounded-2xl shadow-sm p-5 md:p-8">
        {/* Meta */}
        <div className="text-sm text-gray-500 mb-4 flex flex-wrap gap-3">
          <span>By {author}</span>
          <span>•</span>
          <span>{date}</span>
        </div>

        {/* Featured Image */}
        <div className="relative w-full h-60 md:h-80 mb-6">
          <Image
            src={image}
            alt="Blog image"
            fill
            sizes="100vw"
            className="object-cover rounded-xl"
          />
        </div>

        {/* Content */}
        <div className="prose max-w-none">
          <AboutDetailsPost content={content} />
        </div>
      </article>
    </MotionSection>
  )
}
