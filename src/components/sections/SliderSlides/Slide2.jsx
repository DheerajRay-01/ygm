import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef, useEffect } from 'react';

function Slide2() {
  const textRef = useRef();
  const videoRef = useRef();
  const buttonRef = useRef();

  useGSAP(() => {
    gsap.from(textRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.3
    });
    gsap.from(videoRef.current, {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.6
    });
    gsap.from(buttonRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
      delay: 0.9
    });
  }, []);

  return (
 <div className="slide shrink-0 h-screen w-screen relative">
  {/* Background Image */}
  <img
    src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80"
    alt="Our Vision"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div> {/* color updated */}

  {/* Content */}
  <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 p-8 lg:p-24 mt-10">
    
    {/* Text Section */}
    <div
      ref={textRef}
      className="flex-0 md:flex-1 text-center lg:text-left text-[#E0E0E0] space-y-6"> {/* color updated */}
      <h2 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight drop-shadow-lg">
        Our Vision
        <span className="block w-[100px] h-1 bg-[#FFD700] mt-3 mx-auto lg:mx-0 rounded-full"></span> {/* color updated */}
      </h2>

      <p className="text-lg lg:text-xl text-[#C0C0C0] leading-relaxed drop-shadow-md"> {/* color updated */}
        We believe in creating a workforce ecosystem where businesses thrive with the right talent and employees grow with purpose.
        <span className="text-[#FFD700] font-semibold"> Our vision </span> drives every partnership we build. {/* color updated */}
      </p>

      <a
        href="#vision"
        ref={buttonRef}
        className="inline-block px-8 py-4 text-lg font-semibold bg-gradient-to-r from-[#FFD700] to-[#C5A017] rounded-full shadow-lg hover:shadow-2xl hover:from-[#C5A017] hover:to-[#FFD700] transform hover:scale-105 "> {/* color updated */}
        Discover Our Vision
      </a>
    </div>

    {/* Video Section */}
    <div ref={videoRef} className="flex-1 max-w-lg lg:max-w-xl">
      <video
        className="w-full rounded-3xl shadow-2xl border-4 border-[#FFD700]" /* color updated */
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</div>

  );
}

export default Slide2;
