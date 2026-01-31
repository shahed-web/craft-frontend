export type Product = {
  id: number
  title: string
  image: string
  images: string[]
  description: string
  detailsHtml: string
  slug: string
}

export const products: Product[] = [
  {
    id: 1,
    title: "Baskets",
    image: "/images/product-1.jpg",
    images: [
      "/images/product-1.jpg",
      "/images/product-2.png",
      "/images/product-3.jpg",
    ],
    description: "Handwoven baskets made from sustainable natural fibers.",
    detailsHtml: `
      <p>This jute planter basket is handcrafted using premium natural jute fibers.</p>
      <ul>
        <li>Eco-friendly & biodegradable</li>
        <li>Strong woven structure</li>
        <li>Perfect for indoor plants</li>
      </ul>
      <p>Ideal for modern, rustic, and minimalist interiors.</p>
    `,
    slug: "/products/basket",
  },
  {
    id: 2,
    title: "Jute Products",
    image: "/images/product-2.png",
    images: [
      "/images/product-1.jpg",
      "/images/product-2.png",
      "/images/product-3.jpg",
    ],
    description: "Eco-friendly jute essentials for modern living.",
    detailsHtml: `
      <p>This jute planter basket is handcrafted using premium natural jute fibers.</p>
      <ul>
        <li>Eco-friendly & biodegradable</li>
        <li>Strong woven structure</li>
        <li>Perfect for indoor plants</li>
      </ul>
      <p>Ideal for modern, rustic, and minimalist interiors.</p>
    `,
    slug: "/products/jute",
  },
  {
    id: 3,
    title: "Home Decor",
    image: "/images/product-3.jpg",
    images: [
      "/images/product-1.jpg",
      "/images/product-2.png",
      "/images/product-3.jpg",
    ],
    description: "Minimal, earthy decor that complements any space.",
    detailsHtml: `
      <p>This jute planter basket is handcrafted using premium natural jute fibers.</p>
      <ul>
        <li>Eco-friendly & biodegradable</li>
        <li>Strong woven structure</li>
        <li>Perfect for indoor plants</li>
      </ul>
      <p>Ideal for modern, rustic, and minimalist interiors.</p>
    `,
    slug: "/products/decor",
  },
  {
    id: 4,
    title: "Sacks",
    image: "/images/product-4.jpg",
    images: [
      "/images/product-1.jpg",
      "/images/product-2.png",
      "/images/product-3.jpg",
    ],
    description: "Durable sacks built for storage and transport.",
    detailsHtml: `
      <p>This jute planter basket is handcrafted using premium natural jute fibers.</p>
      <ul>
        <li>Eco-friendly & biodegradable</li>
        <li>Strong woven structure</li>
        <li>Perfect for indoor plants</li>
      </ul>
      <p>Ideal for modern, rustic, and minimalist interiors.</p>
    `,
    slug: "/products/sack",
  },
  {
    id: 5,
    title: "Tote Bags",
    image: "/images/product-5.jpg",
    images: [
      "/images/product-1.jpg",
      "/images/product-2.png",
      "/images/product-3.jpg",
    ],
    description: "Stylish eco-friendly tote bags for daily use.",
    detailsHtml: `
      <p>This jute planter basket is handcrafted using premium natural jute fibers.</p>
      <ul>
        <li>Eco-friendly & biodegradable</li>
        <li>Strong woven structure</li>
        <li>Perfect for indoor plants</li>
      </ul>
      <p>Ideal for modern, rustic, and minimalist interiors.</p>
    `,
    slug: "/products/tote-bags",
  },
  {
    id: 6,
    title: "Cane Products",
    image: "/images/product-6.jpg",
    images: [
      "/images/product-1.jpg",
      "/images/product-2.png",
      "/images/product-3.jpg",
    ],
    description: "Natural cane-crafted products with timeless appeal.",
    detailsHtml: `
      <p>This jute planter basket is handcrafted using premium natural jute fibers.</p>
      <ul>
        <li>Eco-friendly & biodegradable</li>
        <li>Strong woven structure</li>
        <li>Perfect for indoor plants</li>
      </ul>
      <p>Ideal for modern, rustic, and minimalist interiors.</p>
    `,
    slug: "/products/cane",
  },
]
