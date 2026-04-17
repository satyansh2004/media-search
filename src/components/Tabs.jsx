import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTabs } from "../redux/slices/searchSlice.js";

const Tabs = () => {
  let tabsName = [
    {
      id: 1,
      name: "Photos",
    },
    {
      id: 2,
      name: "Gifs",
    },
    {
      id: 3,
      name: "Videos",
    },
  ];

  const dispatch = useDispatch();

  const { tabs } = useSelector((store) => store.search);

  return (
    <div className="w-full my-5 flex flex-row gap-5">
      {tabsName.map((tab) => {
        return (
          <button
            onClick={() => dispatch(setTabs(tab.name))}
            key={tab.id}
            className={`p-2 px-5 rounded-md border-1 border-gray-700/90 transition text-sm ${tabs == tab.name ? "bg-gray-950" : "bg-blue-700"} text-white cursor-pointer hover:bg-gray-950`}
          >
            {tab.name}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
