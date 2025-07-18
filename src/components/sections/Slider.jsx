import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { slidesData } from "../../data/Slider";
import Slide1 from "./SliderSlides/Slide1";
import Slide2 from "./SliderSlides/Slide2";
import Slide3 from "./SliderSlides/Slide3";

gsap.registerPlugin(ScrollTrigger);

const Slider = () => {
  const slides = [<Slide1 />, <Slide2 />, <Slide3 />]
   const sliderRef = useRef(null)

     const moveLeft = () => goToSlide(current - 1)
  const moveRight = () => goToSlide(current + 1)
  // useGSAP(() => {
  //   const sections = gsap.utils.toArray(".slide");
  //   const container = document.querySelector(".slider");

  //   // Horizontal scroll
  //   gsap.to(sections, {
  //     xPercent: -100 * (sections.length - 1),
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: container,
  //       start: "top top",
  //       end: () => `+=${container.offsetWidth}`,
  //       scrub: 1,
  //       pin: true,
  //       anticipatePin: 1,
  //       markers: false, // ✅ turn off in production
  //     },
  //   });

  // }, []);

  return (
    // <div className="slider flex w-[300vw]">
    //   <Slide1/>

    //   <Slide2/>

    //   <Slide3/>


    // </div>


    <div className="relative  overflow-x-scroll overflow-y-hidden w-screen">
      <div
        ref={sliderRef}
        className="slider flex "
        // style={{ width: `${slides.length * 100}%` }}
      >
        {slides.map((slide, idx) => (
          <div
            key={idx}
            id={`s-${idx}`}
          >
            {slide}
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 left-0 right-0 flex justify-between px-6 transform -translate-y-1/2">
        <button
          onClick={moveLeft}
          className="btn btn-circle bg-gray-800/70 text-white hover:bg-gray-700"
        >
          ❮
        </button>
        <button
          onClick={moveRight}
          className="btn btn-circle bg-gray-800/70 text-white hover:bg-gray-700"
        >
          ❯
        </button>
      </div>
    </div>

  );
};

export default Slider;
