import React from "react";

const LoverForm = () => {
  return (
    <div className="bg-[#c29ec8] rounded-lg py-4 px-4 relative overflow-hidden max-w-7xl mx-auto">
      {/* Decorative red circle background */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-red-600 opacity-80 rounded-l-full z-0" />

      <div className="relative z-10 flex flex-col items-center gap-4 text-center">
        <h2 className="text-white font-bold text-xl md:text-2xl">
          <span className="font-semibold">Liz Greene's </span>
          <span className="text-white font-extrabold">
            Astrology for Lovers
          </span>
        </h2>

        {/* FORM */}
        <form className="flex flex-col md:flex-row md:justify-center md:items-center gap-4 w-full">
          {/* First block: I am */}
          <div className="flex flex-col md:flex-row items-center gap-2">
            <label className="text-white text-base whitespace-nowrap">
              I am
            </label>
            <input
              type="text"
              placeholder="Aries"
              className="px-3 py-2 rounded-md border border-red-600 text-red-600 font-semibold bg-white w-full md:w-auto"
            />
            <input
              type="text"
              placeholder="female"
              className="px-3 py-2 rounded-md border border-red-600 text-red-600 font-semibold bg-white w-full md:w-auto"
            />
          </div>

          {/* Second block: He/She is */}
          <div className="flex flex-col md:flex-row items-center gap-2">
            <label className="text-white text-base whitespace-nowrap">
              He is / She is
            </label>
            <input
              type="text"
              placeholder="???"
              className="px-3 py-2 rounded-md border border-red-600 text-red-600 font-semibold bg-white w-full md:w-auto"
            />
            <input
              type="text"
              placeholder="male"
              className="px-3 py-2 rounded-md border border-red-600 text-red-600 font-semibold bg-white w-full md:w-auto"
            />
          </div>
        </form>

        {/* Button */}
        <button className="mt-3 border-2 border-white text-white font-semibold px-5 py-1.5 rounded-md hover:bg-white hover:text-red-600 transition duration-300">
          ❤️ How do you love?
        </button>
      </div>
    </div>
  );
};

export default LoverForm;
