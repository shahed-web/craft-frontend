import Image from "next/image"
import Breadcrumbs from "@/components/ui/Breadcrumbs"

export default function AboutPageHeader() {
  return (
    <section className="relative w-full h-64 md:h-80">
      <Image
        src="/images/about-header.jpg"
        alt="About"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-3xl md:text-5xl font-arsenal mb-3">
          Our Story
        </h1>

        <p className="max-w-xl text-sm md:text-base opacity-90 mb-4">
          Connecting traditional craftsmanship from Bangladesh to the global marketplace.
        </p>

        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "About" },
          ]}
          textWhite
        />
      </div>
    </section>
  )
}
