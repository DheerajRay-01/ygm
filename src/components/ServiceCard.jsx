import gsap from "gsap";
import React, { useRef, useEffect } from "react";

const ServiceCard = ({ data }) => {
  const descriptionRef = useRef();
  const containerRef = useRef();
  const tl = useRef();

  useEffect(() => {
    const div = containerRef.current.querySelector("#description");
    const p = descriptionRef.current;

    // Create timeline ONCE
    tl.current = gsap.timeline({ paused: true, defaults: { ease: "power2.out" } });

    // Animate height and paragraph together
    tl.current
      .to(div, {
        height: "80%",
        duration: 0.4,
      })
      .fromTo(
        p,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3 },
        "<" // start with div height animation
      );
  }, []);

  const handleMouseEnter = () => {
    tl.current.play();
  };

  const handleMouseLeave = () => {
    tl.current.reverse();
  };

  return (
    <div
      ref={containerRef}
      className=".service-card relative group rounded-lg overflow-hidden shadow-lg aspect-square bg-cover bg-center cursor-pointer transition-transform duration-300 hover:scale-105"
      style={{ backgroundImage: `url(${data.image})` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      id={`service-card-${data.title}`}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300"></div>

      {/* Title Bar */}
   <div
  id="description"
  className="overflow-hidden absolute bottom-4 left-1/2 h-[15%] transform -translate-x-1/2 w-[90%] bg-white/20 group-hover:bg-black/20 backdrop-blur-sm rounded-lg px-3 py-2 text-center shadow-md flex flex-col gap-3 items-center"
>
  <h3 className="text-lg font-bold text-white drop-shadow-sm">{data.title}</h3>
  
  <div
    ref={descriptionRef}
    className="mt-1 text-sm md:text-base text-gray-50 leading-relaxed font-medium px-2 py-1 rounded backdrop-blur-md bg-black/30 drop-shadow-md"
  >
    {data.description}
  </div>

  <button
    className="mt-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg "
  >
    View service
  </button>
</div>

    </div>
  );
};

export default ServiceCard;
