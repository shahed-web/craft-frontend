export type Product = {
  id: string
  title: string
  image: string
  description: string
  slug: string
}

export const products: Product[] = [
  {
    id: "basket",
    title: "Baskets",
    image: "/images/product-1.jpg",
    description: "Handwoven baskets made from sustainable natural fibers.",
    slug: "/products/basket",
  },
  {
    id: "jute",
    title: "Jute Products",
    image: "/images/product-2.png",
    description: "Eco-friendly jute essentials for modern living.",
    slug: "/products/jute",
  },
  {
    id: "decor",
    title: "Home Decor",
    image: "/images/product-3.jpg",
    description: "Minimal, earthy decor that complements any space.",
    slug: "/products/decor",
  },
  {
    id: "sack",
    title: "Sacks",
    image: "/images/product-4.jpg",
    description: "Durable sacks built for storage and transport.",
    slug: "/products/sack",
  },
  {
    id: "bag",
    title: "Tote Bags",
    image: "/images/product-5.jpg",
    description: "Stylish eco-friendly tote bags for daily use.",
    slug: "/products/tote-bags",
  },
  {
    id: "cane",
    title: "Cane Products",
    image: "/images/product-6.jpg",
    description: "Natural cane-crafted products with timeless appeal.",
    slug: "/products/cane",
  },
]
