import React from 'react';

const LisenceCard = ({ item }) => {
  return (
    <div
      className="group relative h-64 rounded-3xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-500 ease-in-out border border-[#FFD700]/40 bg-[#0F0F0F]"
    >
      {/* Background Image with Stronger Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 ease-out scale-100 hover:scale-110"
        style={{ backgroundImage: `url(${item.img})` }}
      >
        {/* Stronger overlay + blur */}
        <div className="absolute inset-0 bg-black/40  group-hover:bg-black/60 group-hover:backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-5 flex flex-col justify-end h-full ">
        {/* Glass Effect Container */}
        <div className="bg-black/70 backdrop-blur-[2px]  rounded-2xl p-4">
          {/* Title */}
          <h3 className="text-lg font-extrabold mb-1 tracking-wide text-[#FFD700] drop-shadow-lg">
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-200 leading-relaxed drop-shadow-md">
            {item.description}
          </p>
        </div>
      </div>

      {/* Badge */}
      {item.badge && (
        <span className="absolute top-2 right-2 bg-[#FFD700] text-black text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
          {item.badge}
        </span>
      )}
    </div>
  );
};

export default LisenceCard;
