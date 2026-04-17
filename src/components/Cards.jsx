import React from "react";

const Cards = ({ imgSrc, handleCollection }) => {
  return (
    <div className="max-w-[250px] min-w-[250px] min-h-[200px] max-h-[200px] flex flex-col justify-between rounded-md p-4 overflow-hidden shadow-lg bg-gray-950 borde border-1 border-gray-700/70">
      {/* Image */}
      <img
        src={imgSrc}
        alt="Card"
        className="w-full max-h-[100px] min-h-[120px] rounded-md object-cover"
      />

      {/* Buttons */}
      <div className="flex justify-between mt-4">
        <button onClick={handleCollection} className="px-4 py-[2px] text-[13px] bg-emerald-500 hover:bg-emerald-600 text-white rounded-sm transition">
          Collection +
        </button>

        <button className="px-3 py-[2px] text-[13px] bg-rose-500 hover:bg-rose-600 text-white rounded-sm transition">
          View
        </button>
      </div>
    </div>
  );
};

export default Cards;
