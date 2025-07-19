import React from 'react'

const ClientCard = ({ item, index }) => {
  return (
    <div
      key={`${item.id}-${index}`}
      className="client-card shrink-0 w-[300px] md:w-[350px] rounded-xl shadow-lg bg-[#1A1A1A] hover:shadow-2xl transition-shadow duration-300 overflow-hidden" // card bg updated
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >
      {/* Logo */}
      <div className="bg-[#FFD700]/10 flex justify-center bg-cover bg-center items-center h-[120px]"
      style={{backgroundImage:`url(${item.logo})`}}
      > {/* logo bg updated */}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-xl font-semibold text-[#FFD700]"> {/* title color updated */}
          {item.name}
        </h2>
        <p className="text-sm text-[#E0E0E0] italic"> {/* duration color updated */}
          {item.duration}
        </p>
        <p className="text-sm text-[#C0C0C0] line-clamp-3"> {/* description color updated */}
          {item.description}
        </p>

        {/* Visit Button */}
        <a
          href={item.website}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-sm text-[#FFD700] font-medium hover:underline" // link color updated
        >
          Visit Website →
        </a>
      </div>
    </div>
  )
}

export default ClientCard
