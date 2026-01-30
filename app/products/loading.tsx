import ProductSkeleton from "@/components/ui/ProductSkeleton"

const Loading = () => {
  return (
    <section className="px-6 md:px-40 py-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductSkeleton key={i} />
        ))}
      </div>
    </section>
  )
}

export default Loading
