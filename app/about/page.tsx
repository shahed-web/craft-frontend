import AboutPageHeader from "@/components/About/AboutPageHeader"
import CTA from "@/components/About/CTA"
import Stats from "@/components/About/Stats"
import Story from "@/components/About/Story"
import Values from "@/components/About/Values"


export default function Page() {
  return (
    <>
      <AboutPageHeader />

      <main className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-10 space-y-14">
          <Story />
          <Stats />
          <Values />
          <CTA />
        </div>
      </main>
    </>
  )
}
