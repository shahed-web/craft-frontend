export type Blog = {
  id: string
  title: string
  image: string
  description: string
  slug: string
  date: string
}

export const blogs: Blog[] = [
  {
    id: "blog-1",
    title: "Jute: The Sustainable Wonder Fiber",
    image: "/images/product-1.jpg",
    description: "Handwoven baskets made from sustainable natural fibers.",
    slug: "/products/basket",
    date: "2023-10-01",
  },
  {
    id: "blog-2",
    title: "jute products for everyday use",
    image: "/images/product-2.png",
    description: "Eco-friendly jute essentials for modern living.",
    slug: "/products/jute",
    date: "2023-10-02",
  },
  {
    id: "blog-3",
    title: "Home Decor with a Natural Touch",
    image: "/images/product-3.jpg",
    description: "Minimal, earthy decor that complements any space.",
    slug: "/products/decor",
    date: "2023-10-03",
  },
  {
    id: "blog-4",
    title: "Sacks for Storage and Transport",
    image: "/images/product-4.jpg",
    description: "Durable sacks built for storage and transport.",
    slug: "/products/sack",
    date: "2023-10-04",
  },
  {
    id: "blog-5",
    title: "Tote Bags: Stylish and Eco-Friendly",
    image: "/images/product-5.jpg",
    description: "Stylish eco-friendly tote bags for daily use.",
    slug: "/products/tote-bags",
    date: "2023-10-05",
  },
  {
    id: "blog-6",
    title: "Cane Products: Craftsmanship and Durability",
    image: "/images/product-6.jpg",
    description: "Natural cane-crafted products with timeless appeal.",
    slug: "/products/cane",
    date: "2023-10-06",
  },
]
