
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';

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
<div className="w-screen h-screen bg-gradient-to-r from-gray-50 to-gray-100">
  <div
    className="relative flex flex-col justify-center items-center w-full h-full gap-6 px-6 bg-center bg-cover"
    style={{
      backgroundImage: `url(https://images.pexels.com/photos/1181438/pexels-photo-1181438.jpeg)`,
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/40 z-0"></div>

    {/* Hero Content */}
    <div className="relative z-10 flex flex-col justify-center items-center gap-8 text-center">
      {/* Logo / Company Name */}
      <div
        ref={titleRef}
        className="flex flex-col justify-center items-center"
      >
        <img src="/ygm_logo.png" alt="Logo" className="w-60" />
        <p className="text-2xl lg:text-3xl text-white font-semibold tracking-wide">
          Yash Govind Marketing Pvt. Ltd.
        </p>
      </div>

      {/* Tagline */}
      <p
        ref={taglineRef}
        className="text-lg lg:text-2xl text-gray-200 max-w-3xl leading-relaxed  font-semibold tracking-wide"
      >
        Trusted manpower solutions delivering certified excellence, reliable
        teams, and nationwide impact.
      </p>

      {/* Scrolling Text */}
  <div
  ref={scrollContainerRef}
  className="flex flex-col lg:flex-row items-center justify-center gap-2 bg-white/20 rounded-xl backdrop-blur-md shadow-lg px-4 py-2"
>
  {/* Static Heading */}
  <h3 className="text-base lg:text-xl font-semibold text-gray-100 tracking-wide">
    We Build Success Through
  </h3>

  {/* Scrolling Text */}
  <div className="relative h-10 lg:h-12 overflow-hidden min-w-[16rem] lg:min-w-[20rem]">
    <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-transparent"></div>

    <div
      ref={scrollRef}
      className="absolute top-0 space-y-2 flex flex-col"
    >
      {[
        "700+ Skilled Professionals",
        "ISO 9001 Certification",
        "Reliable Human Capital",
        "Workforce Excellence",
        "Nationwide Presence",
      ]
        .concat([
          "700+ Skilled Professionals",
          "ISO 9001 Certification",
          "Reliable Human Capital",
          "Workforce Excellence",
          "Nationwide Presence",
        ])
        .map((item, ind) => (
          <p
            key={ind}
            className="text-blue-700 font-bold text-base lg:text-xl px-2 py-1 tracking-wide"
          >
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
          className="px-6 py-3 bg-blue-600 text-white text-lg lg:text-xl rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg transition-transform hover:scale-105 font-semibold tracking-wide"
        >
          Get Started
        </a>
        <a
          href="#services"
          className="px-6 py-3 border border-blue-300 text-blue-100 text-lg lg:text-xl rounded-full shadow-md hover:bg-blue-50 hover:text-blue-700 hover:border-blue-700 transition-transform hover:scale-105 font-semibold tracking-wide"
        >
          View Services
        </a>
      </div>
    </div>
  </div>
</div>


  );
};

export default Hero;
