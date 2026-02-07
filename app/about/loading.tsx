export default function Loading() {
  return (
    <div className="animate-pulse">
      {/* Hero */}
      <div className="w-full h-64 md:h-80 bg-gray-200" />

      <div className="max-w-6xl mx-auto px-4 py-10 space-y-10">
        {/* Section skeleton */}
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="grid md:grid-cols-2 gap-6 items-center"
          >
            <div className="space-y-4">
              <div className="h-6 w-1/2 bg-gray-200 rounded" />
              <div className="h-4 w-full bg-gray-200 rounded" />
              <div className="h-4 w-5/6 bg-gray-200 rounded" />
              <div className="h-4 w-4/6 bg-gray-200 rounded" />
            </div>

            <div className="w-full h-56 md:h-72 bg-gray-200 rounded-xl" />
          </div>
        ))}

        {/* Stats skeleton */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="p-6 bg-gray-200 rounded-xl h-24" />
          ))}
        </div>
      </div>
    </div>
  )
}
