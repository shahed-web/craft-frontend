import Breadcrumbs from "@/components/ui/Breadcrumbs"
import ProductGallery from "@/components/ui/ProductGallery"
import ProductDetailsPost from "@/components/ui/ProductDetailsPost"
import { products } from "@/data/products"
import RelatedProductsCarousel from "@/components/ui/RelatedProductsCarousel"

export default function ProductPage() {
  const product = products[1] // mock – later use slug

  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: product.title },
        ]}
      />

      {/* Product Section */}
      <section className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <ProductGallery images={product.images} />

        <div className="flex flex-col gap-6">
          <header>
            <h1 className="font-arsenal text-2xl sm:text-3xl lg:text-4xl">
              {product.title}
            </h1>
            <p className="mt-2 text-base sm:text-lg text-gray-600">
              {product.description}
            </p>
          </header>

          <ProductDetailsPost content={product.detailsHtml} />
        </div>
      </section>

      {/* Related Products */}
      <section className="mt-16">
        <h2 className="font-arsenal text-xl mb-4">Related Products</h2>
        <RelatedProductsCarousel />
      </section>
    </main>
  )
}
