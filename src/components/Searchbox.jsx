import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getUnsplash from "../apis/mediaApi";
import {
  setQuery,
  setResults,
  resetPage,
} from "../redux/slices/searchSlice.js";

const Searchbox = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();

  const { page } = useSelector((store) => store.search);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchQuery.trim().length != 0) {
      dispatch(setQuery(searchQuery));

      let data;
      const response = await getUnsplash(searchQuery, page);
      data = response.map((item) => ({
        type: item.asset_type,
        id: item.id,
        url: item.urls.full,
      }));

      dispatch(setResults(data));

      dispatch(resetPage());
    }
  };

  useEffect(() => {
    async function next() {
      let data;
      const response = await getUnsplash(searchQuery, page);
      data = response.map((item) => ({
        type: item.asset_type,
        id: item.id,
        url: item.urls.full,
      }));

      dispatch(setResults(data));
    }
    next();
  }, [page]);

  return (
    <form
      onSubmit={handleSubmit}
      action=""
      className="w-full flex flex-row gap-4 text-sm"
    >
      <input
        onChange={(e) => setSearchQuery((prev) => e.target.value)}
        value={searchQuery}
        type="text"
        name="search"
        id="search"
        placeholder="Search Images"
        className="w-3/4 p-2 px-4 border-1 border-gray-700/50 rounded-md text-md"
      />
      <button className="p-2 w-1/4 bg-gray-800 border border-1 border-gray-700/50 hover:bg-gray-950 hover:shadow-md hover:shadow-gray-900/50 rounded-md cursor-pointer">
        Search
      </button>
    </form>
  );
};

export default Searchbox;
