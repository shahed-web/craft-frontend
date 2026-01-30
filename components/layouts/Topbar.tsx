"use client"
import Link from 'next/link'
import React from 'react'
import { FaEnvelope, FaFacebook, FaLinkedin, FaPhone, FaSquareInstagram } from 'react-icons/fa6'

const Topbar:React.FC = () => {
  return (
    <div className='text-xs bg-green-700 w-full px-20 py-2 text-white font-open hidden md:flex justify-between items-center'>
      
      <div className='flex items-center gap-4'>
        <div className='flex gap-2 items-center'>
          <FaPhone />
          <span>+123-456-7890</span>
        </div>
        <div className='flex gap-2 items-center'>
          <FaEnvelope />
          <span>contact@benubon.com</span>
        </div>
      </div>
      
      <div>
        {/* <span>Contact us and we will reach you shortly</span> */}
      </div>
      
      <div className='text-white flex items-center gap-2'>
        <span>Follow us:</span>
        <Link href="/">
        <FaFacebook />
        </Link>
        <Link href="/">
        <FaSquareInstagram  />
        </Link>
        <Link href="/"> 
        <FaLinkedin  />
        </Link>
      </div>
    </div>
  )
}

export default Topbar
