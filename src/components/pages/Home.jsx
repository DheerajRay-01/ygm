import React from 'react'
import Hero from '../sections/Hero'
import Strengths from '../sections/Strengths'
import WorkSectors from '../sections/WorkSectors'
import Slider from '../sections/Slider'
import Clients from '../sections/Clients'
import ContactUs from '../sections/ContactUs'

const Home = () => {
  return (
    <div>
        {/* <div className='w-screen h-screen bg-amber-300'></div> */}
        <Hero/>
        <Slider/>
        <WorkSectors/>
        <Clients/>
        <Strengths/>
        <ContactUs/>
    </div>
  )
}

export default Home