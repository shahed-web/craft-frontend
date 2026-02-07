export type BlogData = {
  title: string
  slug: string
  image: string
  category: string
  date: string
  excerpt: string
  content: string
}

export const blogs: BlogData[] = [
  {
    title: "Why Handmade Products Are the Future",
    slug: "handmade-future",
    image: "/images/about-header.jpg",
    category: "Sustainability",
    date: "Feb 7, 2026",
    excerpt: "Discover why eco-friendly handmade goods are growing globally.",
    content: `
      <p>Handmade products are gaining global demand due to sustainability and authenticity.</p>
      <p>Materials like jute and seagrass are biodegradable and eco-friendly.</p>
      <p>Supporting artisans also creates social impact.</p>
    `,
  },
  {
    title: "Top Jute Products for Export",
    slug: "jute-products",
    image: "/images/about4.jpg",
    category: "Export",
    date: "Feb 5, 2026",
    excerpt: "Best-selling jute products in international markets.",
    content: `<p>Jute bags, baskets, and rugs are top export items.</p>`,
  },
  {
    title: "How Artisans Change Rural Economy",
    slug: "artisan-impact",
    image: "/images/about-header.jpg",
    category: "Community",
    date: "Feb 3, 2026",
    excerpt: "The social impact of handmade production.",
    content: `<p>Handicraft work creates jobs and empowers communities.</p>`,
  },
]
