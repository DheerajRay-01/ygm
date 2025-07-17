import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const Slide1 = () => {
  const textRef = useRef()
  const slideRef = useRef()
  const imgRef = useRef()

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: slideRef.current,
        start: "top 50%", // Animate earlier
        end: "top 20%",
        scrub: true,
        // markers: true, // Uncomment for testing
      },
    })

    // Animate text
    tl.from(textRef.current.querySelectorAll('*'), {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.3,
    })

    // Animate image
    tl.from(imgRef.current, {
      scale: 0.95,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    }, "<") // Start with text

    return () => tl.kill() // 🧹 cleanup
  }, [])

  return (
    <div ref={slideRef} className="slide shrink-0 h-screen w-screen relative">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 p-8 lg:p-24 h-full">
        {/* Media Section */}
        <div className="flex-1 max-w-lg lg:max-w-xl">
          <img
            ref={imgRef}
            src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg"
            alt="Who We Are"
            className="w-full rounded-3xl shadow-2xl border-4 border-amber-400"
          />
        </div>

        {/* Text Section */}
        <div ref={textRef} className="flex-1 text-center lg:text-left text-white space-y-6">
          <h2 className="text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight drop-shadow-lg">
            Who We Are
            <span className="block w-[80%] h-1 bg-amber-500 mt-3 mx-auto lg:mx-0 rounded-full"></span>
          </h2>

          <p className="text-lg lg:text-xl text-gray-100/90 leading-relaxed drop-shadow-md">
            At <span className="font-semibold text-amber-400">YGM</span>, we
            deliver certified, skilled, and trusted manpower solutions that
            help businesses grow stronger. Our mission? Building reliable
            teams that drive success.
          </p>

          <a
            href="#about"
            className="inline-block px-8 py-4 text-lg font-semibold bg-amber-500 rounded-full shadow hover:shadow-xl hover:bg-amber-600 hover:scale-105 "
          >
            Learn More About Us
          </a>
        </div>
      </div>
    </div>
  )
}

export default Slide1
