// components/Loader.jsx
import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-black flex justify-center items-center">
      <div className="loader relative w-20 h-20">
        <span className="absolute inline-block w-full h-full border-4 border-t-amber-400 border-b-transparent rounded-full animate-spin"></span>
        <span className="absolute inline-block w-full h-full border-4 border-l-amber-500 border-r-transparent rounded-full animate-spin [animation-duration:1.5s]"></span>
      </div>
    </div>
  );
};

export default Loader;
