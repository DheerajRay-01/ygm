import React from 'react'

const LisenceCard = ({item}) => {
  return (
   <div
  className="relative h-50 rounded-3xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-2xl hover:border-white/50 transition-all duration-500 ease-in-out backdrop-blur-lg bg-white/10 border border-white/20"
>
  {/* Background Image with Dark Overlay */}
  <div
    className="absolute inset-0 bg-cover bg-center transform transition-transform duration-500 scale-100 hover:scale-110"
    style={{ backgroundImage: `url(${item.img})` }}
  >
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>
  </div>

  {/* Content */}
  <div className="relative z-10 p-6 flex flex-col justify-between h-full text-white">
    <div>
      <h3 className="text-2xl font-extrabold mb-2 tracking-wide drop-shadow-sm">
        {item.title}
      </h3>
      <p className="text-sm text-gray-200 leading-relaxed drop-shadow-sm">
        {item.description}
      </p>
    </div>

    {item.badge && (
      <span className="absolute top-3 right-3 bg-green-600 text-xs font-semibold px-3 py-1 rounded-full shadow-md">
        {item.badge}
      </span>
    )}
  </div>
</div>

  )
}

export default LisenceCard