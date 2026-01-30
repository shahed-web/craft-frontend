import React from 'react'
import HeroSlider from './HeroSlider'

const Hero:React.FC = () => {
  return (
    <section className='w-full py-10 bg-linear-to-br from-green-200 from-30% via-white via-50% to-green-200 to-90%'>
      <HeroSlider />
    </section>
  )
}

export default Hero
