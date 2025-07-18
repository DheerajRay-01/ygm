import React from 'react'
import { clientsData } from '../../data/ClientData'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import ClientCard from '../ClientCard'

const Clients = () => {
  let scrollTween; // Keep reference to the tween

  useGSAP(() => {
    // Start the infinite scroll animation
    scrollTween = gsap.to(".client-scroller", {
      xPercent: -50, // Move by 50% of width (2x list)
      ease: "none",
      duration: 20,
      repeat: -1,
    });

    const titleSplit = new SplitText(".client-title", { type: "words" });

    gsap.from(titleSplit.words, {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out", // smoother easing
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".client-container",
        start: "top 70%", // start a bit earlier
        end: "top 50%",
        scrub: true,
        // markers: true
      }
    });
  }, []);

  // Duplicate clientData for seamless loop
  const scrollingData = [...clientsData, ...clientsData];

  // Pause on hover
  const handleMouseEnter = () => {
    // if (scrollTween) scrollTween.pause();
    gsap.to(".client-scroller", {
      xPercent: 0,
      ease: "none",
      duration: 100,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(".client-scroller", {
      xPercent: -50,
      ease: "none",
      duration: 15,
      repeat: -1,
    });
  };

  return (
    <div className="client-container w-screen py-10    overflow-hidden"> {/* bg updated */}
      <h1 className="client-title text-4xl md:text-5xl font-extrabold text-center text-[#FFD700] mb-10"> {/* title color updated */}
        Our Trusted Clients
      </h1>

      <div className="relative">
        <div className="client-scroller flex gap-6 px-6 w-max">
          {scrollingData.map((item, index) => (
            <ClientCard
              item={item}
              key={index}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Clients
