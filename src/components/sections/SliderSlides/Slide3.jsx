import React from 'react'

const Slide3 = () => {
  return (
 <div className="slide shrink-0 h-screen w-screen relative">
  {/* Background Video */}
  <video
    className="absolute inset-0 w-full h-full object-cover"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="/video1.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div> {/* color updated */}

  {/* Content */}
  <div className="relative z-10 flex flex-col items-center justify-center text-center h-full p-8 space-y-8">
    
    {/* Heading */}
    <h2 className="text-3xl lg:text-8xl font-extrabold text-[#FFD700] drop-shadow-2xl leading-tight"> {/* color updated */}
      Powering Progress.<br /> Building Futures.
    </h2>

    {/* Quick Stats */}
    <div className="w-[95vw] sm:w-fit grid grid-cols-4 gap-4 bg-[#1A1A1A]/50 backdrop-blur-sm rounded-xl px-2 md:px-6 py-4"> {/* color updated */}
      {[
        { label: "700+ Employees", icon: "👥" },
        { label: "50+ Happy Clients", icon: "🤝" },
        { label: "ISO Certified", icon: "📜" },
        { label: "Not Blacklisted", icon: "✅" },
      ].map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center p-2 text-[#E0E0E0] border-r border-[#C0C0C0]/30 last:border-none"> {/* color updated */}
          <p className="text-sm md:text-lg font-semibold">{item.label}</p>
        </div>
      ))}
    </div>
          <div
        className="flex flex-col lg:flex-row items-center justify-center gap-2 bg-[#1A1A1A]/70 rounded-xl backdrop-blur-md shadow-lg px-4 py-2">
           <h3 className="text-base lg:text-xl font-semibold text-[#FFD700] tracking-wide"> {/* color updated */}
          We have not Blacklisted since 21 Years.
        </h3>
        </div>

    {/* Description */}
    <p className="text-lg lg:text-2xl text-[#C0C0C0] max-w-3xl drop-shadow"> {/* color updated */}
      At <span className="text-[#FFD700] font-semibold">YGM</span>, we
      don’t just provide manpower – we build trusted teams, empower
      industries, and set new benchmarks for workforce excellence.
    </p>
  </div>
</div>

  )
}

export default Slide3