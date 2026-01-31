"use client"

import DOMPurify from "dompurify"
import { useMemo } from "react"

export default function ProductDetailsPost({ content }: { content: string }) {
  const cleanHTML = useMemo(
    () => DOMPurify.sanitize(content),
    [content]
  )

  return (
    <div
      className="prose max-w-none font-rosario"
      dangerouslySetInnerHTML={{ __html: cleanHTML }}
    />
  )
}
