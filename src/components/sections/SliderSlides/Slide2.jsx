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
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 p-8 lg:p-24 mt-10">
        {/* Text Section */}
        <div
          ref={textRef}
          className="flex-0 md:flex-1 text-center lg:text-left text-white space-y-6"
        >
          <h2 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight drop-shadow-lg">
            Our Vision
            <span className="block w-[100px] h-1 bg-amber-500 mt-3 mx-auto lg:mx-0 rounded-full"></span>
          </h2>

          <p className="text-lg lg:text-xl text-gray-200 leading-relaxed drop-shadow-md">
            We believe in creating a workforce ecosystem where businesses thrive with the right talent and employees grow with purpose.
            <span className="text-amber-400 font-semibold"> Our vision </span> drives every partnership we build.
          </p>

          <a
            href="#vision"
            ref={buttonRef}
            className="inline-block px-8 py-4 text-lg font-semibold bg-gradient-to-r from-amber-500 to-orange-500 rounded-full shadow-lg hover:shadow-2xl hover:from-amber-600 hover:to-orange-600 transform hover:scale-105 transition duration-300"
          >
            Discover Our Vision
          </a>
        </div>

        {/* Video Section */}
        <div ref={videoRef} className="flex-1 max-w-lg lg:max-w-xl">
          <video
            className="w-full rounded-3xl shadow-2xl border-4 border-amber-400"
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
