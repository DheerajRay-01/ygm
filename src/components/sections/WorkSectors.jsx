import React, { useRef } from "react";
import { workSectorsDemo } from "../../data/workSectorsDemo";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const WorkSectors = () => {
  const data = workSectorsDemo;
  const titleRef = useRef();

  const handleMouse = (e, cursor) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left; // Cursor X relative to card
    const y = e.clientY - rect.top; // Cursor Y relative to card

    gsap.to(cursor, {
      x: x - 25, // center the cursor
      y: y - 25,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  const handleMouseEnter = (e, cursor) => {
    // console.log(e.currentTarget.querySelector("p"));
    const p = e.currentTarget.querySelector("p");
    gsap.to(cursor, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
    gsap.to(p, {
      y: -20,
      opacity: 1,
      delay: 0.2,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (e, cursor) => {
    const p = e.currentTarget.querySelector("p");
    // const paraSplit = new SplitText.create(p,{type:"line"})

    gsap.to(cursor, {
      opacity: 0,
      scale: 0,
      duration: 0.3,
      ease: "power2.out",
    });

    gsap.to(p, {
      y: 100,
      opacity: 0,
      delay: 0.2,
      ease: "power2.out",
    });
  };

  useGSAP(() => {
    const cards = gsap.utils.toArray(".card");
    const titleSplit = new SplitText(titleRef.current, { type: "words" });

gsap.from(titleSplit.words, {
  y: 50,               // subtle upward movement
  opacity: 0,
  duration: 1.2,       // slightly longer for fluidity
  ease: "power4.out",  // smoother easing
  stagger: 0.15,       // tight stagger for wave-like effect
  scrollTrigger: {
    trigger: ".container",
    start: "top 80%",  // start a bit earlier
    end: "top 60%",    // end slightly later for room
    scrub: 0.5,        // 👈 smooth scrub (delayed catch-up)
    // markers: true,     // remove after testing
    toggleActions: "play none none none",
  },
});



    cards.forEach((card) => {
      gsap.from(card, {
        scale: 0.8,
        borderRadius: "30%",
        duration: 0.6,
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "top 50%",
          scrub:true,
          toggleActions: "play none none none",
          // markers: true,
        },
      });
    });


  }, []);

  return (
    <div className="container mt-2">
      <h1 ref={titleRef} className="text-5xl font-extrabold text-center text-gray-900 mb-10">
        Our Expertise Across Sectors
      </h1>
      <div className="main min-h-screen flex justify-center items-center p-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5  w-[60%] place-items-center">
          {data.map((item, index) => (
            <div
              key={item.title}
              className="relative card w-full aspect-square bg-cover bg-center rounded-lg shadow-lg overflow-hidden"
              style={{
                backgroundImage: `url('${item.image}')`,
                cursor: "none",
              }}
              onMouseMove={(e) =>
                handleMouse(e, document.getElementById(`cursor-${index}`))
              }
              onMouseEnter={(e) =>
                handleMouseEnter(e, document.getElementById(`cursor-${index}`))
              }
              onMouseLeave={(e) =>
                handleMouseLeave(e, document.getElementById(`cursor-${index}`))
              }
            >
              {/* Unique Cursor for each Card */}
              <div
                id={`cursor-${index}`}
                className="flex justify-center items-center w-[70px] h-[70px] z-50 
             bg-white/10 backdrop-blur-md border border-white/20 
             text-white text-sm font-medium
             absolute rounded-full pointer-events-none opacity-0 scale-0"
              >
                View
              </div>

              {/* Overlay */}
              <div className="flex items-center gap-10 justify-center h-full bg-black/50 rounded-lg flex-col">
                <h2 className="text-white text-2xl font-bold">{item.title}</h2>
                <p className="opacity-0 text-gray-100 text-lg px-2 italic text-center ">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkSectors;
