import React from 'react'
import { clientsData } from '../../data/ClientData'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'

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
  ease: "power4.out",  // smoother easing
  stagger: 0.15,  
  scrollTrigger: {
    trigger: ".client-container",
    start: "top 70%",  // start a bit earlier
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
      xPercent: 0, // Move by 50% of width (2x list)
      ease: "none",
      duration: 100,
    });
  };

  const handleMouseLeave = () => {
       gsap.to(".client-scroller", {
      xPercent: -50, // Move by 50% of width (2x list)
      ease: "none",
      duration: 15,
      repeat: -1,
    });
  };

  return (
    <div
      className="client-container w-screen py-10 bg-gray-50 overflow-hidden"
    >
      <h1 className="client-title text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-10">
        Our Trusted Clients
      </h1>

      <div className="relative">
        <div className="client-scroller flex gap-6 px-6 w-max">
          {scrollingData.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="client-card shrink-0 w-[300px] md:w-[350px] rounded-xl shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
                  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
            >
              {/* Logo */}
              <div className="bg-gray-100 p-4 flex justify-center items-center h-[120px]">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="max-h-[80px] object-contain"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col gap-2">
                <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                <p className="text-sm text-gray-500 italic">{item.duration}</p>
                <p className="text-sm text-gray-600 line-clamp-3">{item.description}</p>

                {/* Visit Button */}
                <a
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm text-green-600 font-medium hover:underline"
                >
                  Visit Website →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Clients
