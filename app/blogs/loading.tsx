export default function Loading() {
  return (
    <div className="animate-pulse max-w-6xl mx-auto px-4 py-10">
      <div className="h-8 w-48 bg-gray-200 rounded mb-6" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1,2,3,4,5,6].map(i => (
          <div key={i} className="bg-gray-200 h-64 rounded-xl" />
        ))}
      </div>
    </div>
  )
}
