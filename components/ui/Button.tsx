import Link from 'next/link'
import React from 'react'

interface ButtonProps {
  label?: string,
  path?: string
}

const Button:React.FC<ButtonProps> = ({label, path}) => {
  return (
    <Link href={path || "/"} className='bg-green-700 text-white font-arsenal px-5 py-2 rounded-tl-4xl rounded-br-4xl'>
      {label || "View Our Collections"}
    </Link>
  )
}

export default Button
