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
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full p-8 space-y-8">
          {/* Heading */}
          <h2 className="text-6xl lg:text-8xl font-extrabold text-white drop-shadow-2xl leading-tight">
            Powering Progress. Building Futures.
          </h2>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4">
            {[
              { label: "700+ Employees", icon: "👥" },
              { label: "50+ Happy Clients", icon: "🤝" },
              { label: "ISO Certified", icon: "📜" },
              { label: "Not Blacklisted", icon: "✅" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-2 text-white border-r border-white/20 last:border-none"
              >
                <p className="text-lg font-semibold">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="text-lg lg:text-2xl text-gray-100/90 max-w-3xl drop-shadow">
            At <span className="text-amber-400 font-semibold">YGM</span>, we
            don’t just provide manpower – we build trusted teams, empower
            industries, and set new benchmarks for workforce excellence.
          </p>
        </div>
      </div>
  )
}

export default Slide3