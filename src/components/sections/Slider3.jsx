import React, { useRef } from 'react'
import Slide1 from './SliderSlides/Slide1'
import Slide2 from './SliderSlides/Slide2'
import Slide3 from './SliderSlides/Slide3'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'

const Slider3 = () => {

useGSAP(() => {
  const titleSplit = new SplitText(".about-title", { type: "words" });

  gsap.from(titleSplit.words, {
    y: 40,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".about-container",
      start: "top 80%",
      end: "top 70%",
      toggleActions: "play none none reverse",
      // scrub: true, // ❌ remove this for non-sticky
      // markers: true,
    },
  });

  return () => {
    titleSplit.revert();
  };
});


  return (
    <div className=" w-full about-container ">
      {/* Section Heading */}
      <div className="text-center py-10">
        <h2  className="about-title text-4xl md:text-5xl font-extrabold text-gray-800">
          About <span className="text-amber-500">YGM</span>
        </h2>
      </div>

      {/* Carousel */}
      <div className="carousel w-full ">
        <div id="slide1" className="carousel-item relative w-full ">
          <Slide1 />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-50">
            <a href="#slide3" className="btn btn-circle bg-transparent border-1 hover:bg-white/30 border-white">❮</a>
            <a href="#slide2" className="btn btn-circle bg-transparent border-1 hover:bg-white/30 border-white">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <Slide2 />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-50">
            <a href="#slide1" className="btn btn-circle bg-transparent border-1 hover:bg-white/30 border-white">❮</a>
            <a href="#slide3" className="btn btn-circle bg-transparent border-1 hover:bg-white/30 border-white">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <Slide3 />
          <div className="absolute left-5 right-3 top-1/2 flex -translate-y-1/2 transform justify-between z-50">
            <a href="#slide2" className="btn btn-circle bg-transparent border-1 hover:bg-white/30 border-white">❮</a>
            <a href="#slide1" className="btn btn-circle bg-transparent border-1 hover:bg-white/30 border-white">❯</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider3
