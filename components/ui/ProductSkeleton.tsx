const ProductSkeleton = () => {
  return (
    <div className="bg-[#FFF7EF] rounded-xl p-3 animate-pulse">
      <div className="aspect-square bg-gray-200 rounded-lg" />

      <div className="mt-3 space-y-2">
        <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto" />
        <div className="h-3 bg-gray-200 rounded w-full" />
        <div className="h-3 bg-gray-200 rounded w-5/6 mx-auto" />
      </div>
    </div>
  )
}

export default ProductSkeleton
