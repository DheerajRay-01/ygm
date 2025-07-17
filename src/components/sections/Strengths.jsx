import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import React, { useRef } from 'react'
import { strengths } from '../../data/StrengthsData'

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
      <h1 className="strength-title text-5xl font-extrabold text-center text-gray-900 mb-10">
        Licensed, Certified & Trusted
      </h1>

      <div
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl w-full"
      >
        {strengths.map((item, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-500 backdrop-blur-lg bg-white/20 border border-white/30"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <div className="absolute inset-0 bg-black/40"></div> {/* Dark overlay */}
            </div>

            {/* Content */}
            <div className="relative z-10 p-6 flex flex-col justify-between h-full text-white">
              <div>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-200">{item.description}</p>
              </div>
              {item.badge && (
                <span className="absolute top-2 right-2 bg-green-600 text-xs font-semibold px-3 py-1 rounded-full">
                  {item.badge}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Strengths
