import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaLinkedin, FaSquareInstagram } from 'react-icons/fa6'
import ContactForm from './ContactForm'

const ContactSection:React.FC = () => {
  return (
    <section className='w-full px-6 py-6 lg:px-40 lg:py-20 min-h-50 flex-col md:flex-row flex justify-center items-center'>
      <div className='w-full md:w-1/2 flex flex-col gap-8 justify-center mb-10 md:mb-0 mr-0 md:mr-10'>
        <h2 className="font-amatic uppercase text-xl text-[#407B3F]">Contacts</h2>
        <h1 className="font-arsenal text-4xl md:text-5xl">Get in Touch</h1>
        <div>
          <p className='text-[#82705D]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, tempora commodi totam adipisci animi odit a dicta blanditiis assumenda nihil.</p>
        </div>
        <div className="flex gap-2">
          <Link href="/"><FaFacebook size={30} className='text-blue-500'/></Link>
          <Link href="/"><FaSquareInstagram size={30} className='text-red-500'/></Link>
          <Link href="/"><FaLinkedin size={30} className='text-blue-800'/></Link>
        </div>
      </div>
      <div className='w-full md:w-1/2'>
        <ContactForm />
      </div>
    </section>
  )
}

export default ContactSection
