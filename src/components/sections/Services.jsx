import React, { useRef } from "react";
import { workSectorsDemo } from "../../data/workSectorsDemo";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";
import ServiceCard from "../ServiceCard";

const Services = () => {
const titleRef = useRef()



  useGSAP(() => {
    // const cards = gsap.utils.toArray(".card");
    const titleSplit = new SplitText(titleRef.current, { type: "words" });

gsap.from(titleSplit.words, {
  y: 50,               // subtle upward movement
  opacity: 0,
  duration: 1.2,       // slightly longer for fluidity
  ease: "power4.out",  // smoother easing
  stagger: 0.15,       // tight stagger for wave-like effect
  scrollTrigger: {
    trigger: ".service-container",
    start: "top 60%",  // start a bit earlier
    end: "top 50%",    // end slightly later for room
    scrub: 0.5,        // 👈 smooth scrub (delayed catch-up)
    // markers: true,     // remove after testing
    toggleActions: "play none none none",
  },
});

  }, []);



  return (
<div className="service-container w-full min-h-screen bg-gray-50 py-10 ">
  <h1 ref={titleRef} className="text-5xl font-extrabold text-center text-gray-900 mb-10">
    Our Expertise Across Sectors
  </h1>
  <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
    {workSectorsDemo.map((item, idx) => (
     <ServiceCard key={idx} data={item}/>
    ))}
  </div>
</div>


  )
}

export default Services