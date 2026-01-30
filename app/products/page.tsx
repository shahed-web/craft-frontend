import type { Metadata } from "next"
import { products } from "@/data/products"
import ProductCard from "@/components/ui/ProductCard"
import MobileCategoryNav from "@/components/ui/MobileCategoryNav"
import Breadcrumbs from "@/components/ui/Breadcrumbs"
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema"

export const metadata: Metadata = {
  title: "Eco-Friendly Products | Benubon",
  description:
    "Explore eco-friendly jute, basket, cane, sack, and home decor products crafted from sustainable natural materials.",

  keywords: [
    "jute products",
    "eco-friendly products",
    "handmade baskets",
    "cane products",
    "home decor",
    "sacks",
    "sustainable crafts",
  ],

  alternates: {
    canonical: "/products",
  },

  openGraph: {
    title: "Eco-Friendly Products | Benubon",
    description:
      "Discover sustainable jute, basket, cane, sack, and decor products made with care for nature.",
    url: "/products",
    siteName: "Benubon",
    images: [
      {
        url: "/images/og-products.jpg",
        width: 1200,
        height: 630,
        alt: "Benubon eco-friendly products",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Eco-Friendly Products | Benubon",
    description:
      "Shop sustainable jute, basket, cane & decor products handcrafted with natural materials.",
    images: ["/images/og-products.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
}

const ProductsPage = async () => {
  return (
    <section className="px-6 md:px-40 py-10">
      {/* Desktop breadcrumb */}
      <BreadcrumbSchema />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Products" },
        ]}
      />

      {/* Mobile category navigation */}
      <MobileCategoryNav />

      {/* Product grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default ProductsPage
