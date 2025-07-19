const StrengthCard = ({ img, title, description, badge }) => {
  return (
    <div
      className="relative rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-500 backdrop-blur-lg bg-white/20 border border-white/30"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div> {/* Dark overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 flex flex-col justify-between h-full text-white">
        <div>
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-sm text-gray-200">{description}</p>
        </div>
        {badge && (
          <span className="absolute top-4 right-4 bg-green-600 text-xs font-semibold px-3 py-1 rounded-full">
            {badge}
          </span>
        )}
      </div>
    </div>
  )
}

export default StrengthCard