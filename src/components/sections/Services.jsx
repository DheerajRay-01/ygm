import React, { useRef } from "react";
import { workSectorsDemo } from "../../data/workSectorsDemo";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";
import ServiceCard from "../ServiceCard";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Services = () => {
  const titleRef = useRef();
  const serviceCardsRef = useRef();

  useGSAP(() => {
    // Animate Title
    const titleSplit = new SplitText(titleRef.current, { type: "words" });
    gsap.from(titleSplit.words, {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".service-container",
        start: "top 80%",
        end: "top 70%",
        scrub: 0.5,
        toggleActions: "play none none none",
      },
    });

    // Animate Service Cards
    const cards = serviceCardsRef.current.querySelectorAll(".service-card");
    gsap.from(cards, {
      y: 30,                // subtle upward movement
      opacity: 0,
      scale: 0.95,          // slight zoom in
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,         // stagger for wave effect
      scrollTrigger: {
        trigger: ".service-container",
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <div id="service" className="service-container w-full min-h-screen bg-gray-50 py-10">
      <h1
        ref={titleRef}
        className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-10"
      >
        Industries We Serve
      </h1>
      <div
        ref={serviceCardsRef}
        className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4"
      >
        {workSectorsDemo.map((item, idx) => (
          <ServiceCard key={idx} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Services;
