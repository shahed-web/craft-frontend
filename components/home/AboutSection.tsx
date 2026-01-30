import Image from 'next/image'
import React from 'react'
import { FaHandHoldingHand, FaLeaf, FaRecycle, FaRegThumbsUp } from 'react-icons/fa6'

const AboutContent: React.FC = () => {
    return (
        <div className="text-sm tracking-wider flex flex-col gap-5 md:flex-row w-full">
                <div className="flex flex-col gap-5 md:gap-10">
                    <div className='flex gap-5'>
                        <div className='flex flex-col items-center justify-center'>
                        <div className="rounded-t-full p-2 text-white bg-green-800">
                            <FaRegThumbsUp size={30} />
                        </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h2 className="text-xl text-green-100 font-rosario">Our Mission</h2>
                            <p className='text-green-100 font-rosario'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ducimus.</p>
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <div className='flex flex-col items-center justify-center'>
                        <div className="rounded-t-full p-2 text-green-800 bg-white">
                            <FaHandHoldingHand  size={30} />
                        </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h2 className="text-xl text-green-100 font-rosario">Hand made</h2>
                            <p className='text-green-100 font-rosario'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ducimus.</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-5 md:gap-10">
                    <div className='flex gap-5'>
                        <div className='flex flex-col items-center justify-center'>
                            <div className="rounded-t-full p-2 text-green-800 bg-white">
                                <FaRecycle size={30} />
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h2 className="text-xl text-green-100 font-rosario">Sustainable</h2>
                            <p className='text-green-100 font-rosario'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ducimus.</p>
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <div className='flex flex-col items-center justify-center'>
                        <div className="rounded-t-full p-2 text-white bg-green-800">
                            <FaLeaf size={30} />
                        </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h2 className="text-xl text-green-100 font-rosario">Hand made</h2>
                            <p className='text-green-100 font-rosario'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ducimus.</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

const AboutSection:React.FC = () => {
  return (
    <section>
      <div className="flex flex-col gap-5 md:gap-10 md:flex-row py-6 md:py-10 px-6 md:px-30 min-h-50 bg-green-700 rounded-br-4xl lg:rounded-br-5xl">
        <div className="w-full md:w-1/2 lg:w-1/3">
            <Image 
                src="/images/about-section.png"
                width={400}
                height={400}
                alt='about'   
            />
        </div>
        <div className="w-full md:w-1/2 lg:w-2/3 flex flex-col gap-6 justify-center">
            <h2 className="text-xl font-amatic uppercase text-[#FFF7EF] mt-5 md:mt-0">what we do</h2>
            <h1 className="text-4xl md:text-5xl font-arsenal text-green-100">Sustainable Handicraft products</h1>
            <p className='text-[#FFF7EF] font-rosario'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime itaque nesciunt harum hic culpa, consectetur quam illum suscipit molestias animi eligendi asperiores explicabo excepturi perferendis ullam vitae molestiae? Fugit, earum.
            </p>
            <AboutContent />
        </div>
      </div>
    </section>
  )
}

export default AboutSection
