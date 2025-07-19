
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';
import { heroScrollData } from '../../data/herosectionScrollData';

const Hero = () => {
    const scrollRef = useRef();
    const titleRef = useRef();
    const taglineRef = useRef();
    const scrollContainerRef= useRef()
    const ctaRef= useRef()

  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1, defaults: { ease: 'none' } });
    tl.to(scrollRef.current, {
      yPercent: -50, // move up by 50% of its height
      duration: 12,  // slower, smoother scroll
    });

    const tl2 = gsap.timeline()


tl2.from(titleRef.current, {
  scale: 3,
  opacity: 0,
  duration: 1, // first step
  ease: "power1.out",
})
.to(titleRef.current, {
  opacity: 1,   // partial fade in
  duration: 0.6,
  ease: "none",
  // delay:.6
})


 tl2.from(taglineRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    });

    // Optional: scrollContainer animation
    tl2.from(scrollContainerRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    });

    // Optional: CTA Button animation
    tl2.from(ctaRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    });





   


  }, []);

  return (
<div id='hero' className="w-screen h-screen bg-gradient-to-r from-[#000000] to-[#1A1A1A]">
  <div
    className=" relative flex flex-col justify-center items-center w-full h-full gap-6 px-6 bg-center bg-cover"
    style={{
      backgroundImage: `url(https://images.pexels.com/photos/1181438/pexels-photo-1181438.jpeg)`,
    }}
  >
    {/* Overlay */}
    <div className=" absolute inset-0 bg-[#000000]/60 backdrop-blur-[1px]"></div> {/* color updated */}

    {/* Hero Content */}
    <div className=" h-[90%]  p-5 relative pt-10 md:p-20 flex flex-col justify-center items-center gap-2 md:gap-3 text-center">
      {/* Logo / Company Name */}
      <div
        ref={titleRef}
        className="flex flex-col justify-center items-center  mt-20"
      >
        <img src="/logo.png" alt="Logo" className="w-25 md:w-50 " />
        <p className="text-3xl md:text-4xl font-extrabold text-[#FFD700] tracking-wide"> {/* color updated */}
          Yash Govind Marketing Pvt. Ltd.
        </p>
      </div>

      {/* Tagline */}
      <p
        ref={taglineRef}
        className="text-lg lg:text-2xl italic text-[#E0E0E0] max-w-3xl leading-relaxed font-semibold tracking-wide"> {/* color updated */}
        Trusted manpower solutions delivering certified excellence, reliable
        teams, and nationwide impact.
      </p>

      {/* Scrolling Text */}
      <div
        ref={scrollContainerRef}
        className="flex flex-col lg:flex-row items-center justify-center gap-2 bg-[#1A1A1A]/70 rounded-xl backdrop-blur-md shadow-lg px-4 py-2"> {/* color updated */}
        {/* Static Heading */}
        <h3 className="text-base lg:text-xl font-semibold text-[#FFD700] tracking-wide"> {/* color updated */}
          We Build Success Through
        </h3>

        {/* Scrolling Text */}
        <div className="relative h-10 lg:h-12 overflow-hidden min-w-[16rem] lg:min-w-[20rem] flex justify-center items-center">
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-transparent"></div>

          <div
            ref={scrollRef}
            className="absolute top-0 space-y-2 flex flex-col"
          >
            {
              heroScrollData.map((item, ind) => (
                <p
                  key={ind}
                  className="text-[#FFD700] font-bold text-base lg:text-xl px-2 py-1 tracking-wide"> {/* color updated */}
                  {item}
                </p>
              ))}
          </div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div ref={ctaRef} className="flex gap-4 mt-6 flex-wrap justify-center">
        <a
          href="#contact"
          className="px-6 py-3 bg-[#FFD700] text-[#000000] text-lg lg:text-xl rounded-full shadow-md hover:bg-[#C5A017] hover:shadow-lg transition-transform hover:scale-105 font-semibold tracking-wide"> {/* color updated */}
          Get Started
        </a>
        <a
          href="#services"
          className="px-6 py-3 border border-[#FFD700] text-[#FFD700] text-lg lg:text-xl rounded-full shadow-md hover:bg-[#FFD700] hover:text-[#000000] hover:border-[#FFD700] transition-transform hover:scale-105 font-semibold tracking-wide"> {/* color updated */}
          View Services
        </a>
      </div>
    </div>
  </div>
</div>



  );
};

export default Hero;
