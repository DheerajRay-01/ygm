import React from 'react'
import Hero from '../sections/Hero'
import Strengths from '../sections/Strengths'
import Slider from '../sections/Slider'
import Clients from '../sections/Clients'
import Contact from '../sections/Contact'
import Services from '../sections/Services'
import Slider2 from '../sections/Slider2'
import Slider3 from '../sections/Slider3'

const Home = () => {
  return (
    <div className='bg-[#000000]'>
      <section id="hero" className="scroll-mt-20">
        <Hero />
      </section>
      <section id="about" className="scroll-mt-20">
        <Slider />
        {/* <Slider3/> */}
      </section>
      <section id="service" className="pt-7 scroll-mt-20">
        <Services />
      </section>
      <section id="clients" className="pt-7 scroll-mt-20">
        <Clients />
      </section>
      <section id="strength" className="pt-7 scroll-mt-20">
        <Strengths />
      </section>
      <section id="contact" className="pt-7 scroll-mt-20">
        <Contact />
      </section>
    </div>
  )
}

export default Home
