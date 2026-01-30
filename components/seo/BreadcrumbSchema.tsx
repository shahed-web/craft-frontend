const BreadcrumbSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://benubon.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: "https://benubon.com/products",
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default BreadcrumbSchema
