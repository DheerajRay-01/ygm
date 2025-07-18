import React from 'react'
import Hero from '../sections/Hero'
import Strengths from '../sections/Strengths'
import Slider from '../sections/Slider'
import Clients from '../sections/Clients'
import Contact from '../sections/Contact'
import Services from '../sections/Services'

const Home = () => {
  return (
    <div>
      <section id="hero" className="scroll-mt-20">
        <Hero />
      </section>
      <section id="about" className="scroll-mt-20">
        <Slider />
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
