export default function Loading() {
  return (
    <div className="animate-pulse">
      <div className="w-full h-64 bg-gray-200" />

      <div className="max-w-6xl mx-auto px-4 py-10 space-y-6">
        <div className="bg-gray-200 h-80 rounded-xl" />
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 rounded" />
          <div className="h-4 bg-gray-200 w-5/6 rounded" />
          <div className="h-4 bg-gray-200 w-4/6 rounded" />
        </div>
      </div>
    </div>
  )
}
