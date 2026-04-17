import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nextPage, prevPage } from "../redux/slices/searchSlice";

const PageChange = () => {
  const dispatch = useDispatch();
  const handleNext = () => {
    dispatch(nextPage());
  };

  const handlePrev = () => {
    dispatch(prevPage());
  };

  const { page } = useSelector((store) => store.search);

  return (
    <>
      <div className="w-full flex flex-row justify-between mt-8">
        <button
          onClick={handlePrev}
          className="p-2 px-5 rounded-md border-1 border-gray-700/90 transition text-sm bg-emerald-700 text-white cursor-pointer hover:bg-gray-950"
        >
          ← Prev
        </button>
        <button
          onClick={handleNext}
          className="p-2 px-5 rounded-md border-1 border-gray-700/90 transition text-sm bg-rose-800 text-white cursor-pointer hover:bg-gray-950"
        >
          Next →
        </button>
      </div>
    </>
  );
};

export default PageChange;
