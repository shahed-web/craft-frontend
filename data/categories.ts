export const productCategories = [
  "All Products",
  "Basket",
  "Coaster",
  "Home Decor",
  "Sack",
  "Bags",
  "Jute Products",
  "Hyacinth Products",
  "Cane Products",
]
export type Category = {
  id: number
  title: string
  image: string
  description: string
  slug: string
}

export const categories: Category[] = [
  {
    id: 1,
    title: "Baskets",
    image: "/images/product-1.jpg",
    description: "Handwoven baskets made from sustainable natural fibers.",
    slug: "/products/basket",
  },
  {
    id: 2,
    title: "Jute Products",
    image: "/images/product-2.png",
    description: "Eco-friendly jute essentials for modern living.",
    slug: "/products/jute",
  },
  {
    id: 3,
    title: "Home Decor",
    image: "/images/product-3.jpg",
    description: "Minimal, earthy decor that complements any space.",
    slug: "/products/decor",
  },
  {
    id: 4,
    title: "Sacks",
    image: "/images/product-4.jpg",
    description: "Durable sacks built for storage and transport.",
    slug: "/products/sack",
  },
  {
    id: 5,
    title: "Tote Bags",
    image: "/images/product-5.jpg",
    description: "Stylish eco-friendly tote bags for daily use.",
    slug: "/products/tote-bags",
  },
  {
    id: 6,
    title: "Cane Products",
    image: "/images/product-6.jpg",
    description: "Natural cane-crafted products with timeless appeal.",
    slug: "/products/cane",
  },
]