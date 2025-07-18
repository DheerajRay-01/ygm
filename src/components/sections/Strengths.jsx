import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import React, { useRef } from 'react'
import { strengths } from '../../data/StrengthsData'
import LisenceCard from '../LisenceCard'

gsap.registerPlugin(ScrollTrigger)


const Strengths = () => {
  const gridRef = useRef()

  useGSAP(() => {

 const titleSplit = new SplitText(".strength-title", { type: "words" });
 

gsap.from(titleSplit.words, {
  y: 50,
  opacity: 0,
  duration: 1.2,
  ease: "power4.out",  // smoother easing
  stagger: 0.15,  
  scrollTrigger: {
    trigger: ".strength-section",
    start: "top 70%",  // start a bit earlier
    end: "top 50%",    
    scrub: true,
    // markers: true
  }
});

    gsap.from(gridRef.current.children, {
      y: 100,
      opacity: 0,
      stagger: 0.2,
      duration: .8,
      ease: "none",
      scrollTrigger: {
        trigger: ".strength-section",
        start: "top 60%",
        scrub:true,
        end: "top 30%",
        toggleActions: "play none none reverse",
      }
    })
  }, [])

  return (
    <div className="strength-section px-4 bg-gradient-to-br  min-h-screen flex flex-col items-center">
      <h1 className="strength-title text-4xl md:text-5lx  font-extrabold text-center text-gray-900 mb-10">
        Trusted by Standards 
      </h1>

      <div
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl w-full"
      >
        {strengths.map((item, index) => (
         <LisenceCard item={item} key={index}/>
        ))}
      </div>
    </div>
  )
}

export default Strengths
