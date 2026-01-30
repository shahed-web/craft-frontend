import { products } from "@/data/products"
import ProductCard from "@/components/ui/ProductCard"

const ProductsPage = async () => {
  return (
    <section className="px-6 md:px-40 py-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default ProductsPage
