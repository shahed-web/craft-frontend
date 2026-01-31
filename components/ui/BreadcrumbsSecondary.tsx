import Link from "next/link"

interface BreadcrumbItem {
  label: string
  href?: string
}

export default function BreadcrumbsSecondary({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-gray-500">
      <ol className="flex flex-wrap gap-1">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-1">
            {item.href ? (
              <Link href={item.href} className="hover:underline">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-700">{item.label}</span>
            )}
            {idx < items.length - 1 && <span>/</span>}
          </li>
        ))}
      </ol>
    </nav>
  )
}
