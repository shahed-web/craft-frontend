"use client"

import DOMPurify from "dompurify"
import { useMemo } from "react"

export default function AboutDetailsPost({ content }: { content: string }) {
  const cleanHTML = useMemo(() => {
    if (typeof window === "undefined") return content
    return DOMPurify.sanitize(content)
  }, [content])

  return (
    <div
      className="prose max-w-none font-rosario text-gray-700"
      dangerouslySetInnerHTML={{ __html: cleanHTML }}
    />
  )
}
