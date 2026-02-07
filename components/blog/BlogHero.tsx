import Image from "next/image"
import Breadcrumbs from "@/components/ui/Breadcrumbs"

interface Props {
  title: string
  image: string
}

export default function BlogHero({ title, image }: Props) {
  return (
    <section className="relative w-full h-64 md:h-80">
      <Image
        src={image}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-2xl md:text-4xl font-arsenal max-w-2xl">
          {title}
        </h1>

        <div className="mt-3">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blogs" },
              { label: title },
            ]}
            textWhite
          />
        </div>
      </div>
    </section>
  )
}
