import Link from "next/link"

type BreadcrumbItem = {
  label: string
  href?: string
}

interface Props {
  items: BreadcrumbItem[]
}

const Breadcrumbs = ({ items }: Props) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className="hidden md:block mb-6 text-sm"
    >
      <ol className="flex items-center gap-2 text-gray-600">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-green-700 transition"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-green-800 font-medium">
                {item.label}
              </span>
            )}

            {index < items.length - 1 && (
              <span className="opacity-40">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumbs
