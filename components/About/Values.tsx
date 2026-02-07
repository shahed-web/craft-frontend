import MotionSection from "./MotionSection"

const values = [
  {
    title: "Sustainability",
    text: "We use eco-friendly materials and responsible production methods.",
  },
  {
    title: "Fair Trade",
    text: "Ensuring fair wages and safe working conditions for artisans.",
  },
  {
    title: "Quality Craftsmanship",
    text: "Each product is handmade with care and attention to detail.",
  },
]

export default function Values() {
  return (
    <MotionSection>
      <div>
        <h2 className="text-2xl md:text-3xl font-arsenal text-center mb-8">
          Our Values
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <div
              key={i}
              className="p-6 border rounded-xl hover:shadow-md transition bg-white"
            >
              <h3 className="font-semibold text-lg mb-2">{v.title}</h3>
              <p className="text-gray-600 text-sm">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}
