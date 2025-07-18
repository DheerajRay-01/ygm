import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import React, { useRef } from 'react';
import { strengths } from '../../data/StrengthsData';
import LisenceCard from '../LisenceCard';

gsap.registerPlugin(ScrollTrigger);

const Strengths = () => {
  const gridRef = useRef();

  useGSAP(() => {
    // Title animation (split words)
    const titleSplit = new SplitText(".strength-title", { type: "words" });

    gsap.from(titleSplit.words, {
      y: 40,
      opacity: 0,
      duration: 1.4,
      ease: "power3.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".strength-section",
        start: "top 75%",
        end: "top 50%",
        scrub: true,
      },
    });

    // Cards animation
    gsap.from(gridRef.current.children, {
      y: 80,
      opacity: 0,
      scale: 0.95,
      stagger: 0.15,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: gridRef.current,
        start: "top 70%",
        end: "top 30%",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="strength-section px-4 py-12 min-h-screen flex flex-col items-center "> {/* section bg updated */}
      <h1 className="strength-title text-4xl md:text-5xl font-extrabold text-center text-[#FFD700] drop-shadow-sm"> {/* title color updated */}
        Trusted by Standards
      </h1>

      <div
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl w-full mt-10"
      >
        {strengths.map((item, index) => (
          <LisenceCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Strengths;