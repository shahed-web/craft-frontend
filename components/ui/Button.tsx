import Link from 'next/link'
import React from 'react'

interface ButtonProps {
  name?: string,
  path?: string
}

const Button:React.FC<ButtonProps> = ({name, path}) => {
  return (
    <Link href={path || "/"} className='bg-green-700 text-white font-arsenal px-5 py-2 rounded-tl-4xl rounded-br-4xl'>
      {name || "View Our Collections"}
    </Link>
  )
}

export default Button
