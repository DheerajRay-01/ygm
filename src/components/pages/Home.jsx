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
        <Hero/>
        <Slider/>
        <Services/> 
        <Clients/>
        <Strengths/>
        <Contact/>
    </div>
  )
}

export default Home