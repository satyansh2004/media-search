import React from "react";
import { useSelector } from "react-redux";

const Cards = ({ imgSrc, handleCollection, vidSrc }) => {
  const { tabs } = useSelector((store) => store.search);

  return (
    <div className="max-w-[250px] min-w-[250px] min-h-[200px] max-h-[200px] flex flex-col justify-between rounded-md p-4 overflow-hidden shadow-lg bg-gray-950 borde border-1 border-gray-700/70">
      {/* Image */}
      {tabs == "Videos" ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          class="w-full max-h-[100px] min-h-[120px] rounded-md object-cover"
        >
          <source src={vidSrc} type="video/mp4" />
        </video>
      ) : (
        <img
          src={imgSrc}
          alt="Card"
          className="w-full max-h-[100px] min-h-[120px] rounded-md object-cover"
        />
      )}

      {/* Buttons */}
      <div className="flex justify-between mt-4">
        <button
          onClick={handleCollection}
          className="px-4 py-[2px] text-[13px] bg-emerald-500 hover:bg-emerald-600 text-white rounded-sm transition"
        >
          Collection +
        </button>

        {tabs == "Videos" && (
          <a href={vidSrc}>
            <button className="px-3 cursor-pointer py-[3px] text-[13px] bg-rose-500 hover:bg-rose-600 text-white rounded-sm transition">
              Download ▶
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default Cards;
