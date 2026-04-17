import Navbar from "./components/Navbar";
import { Outlet } from "react-router";
import { useEffect } from "react";
import client from "./apis/videoApi.js";

const App = () => {
  return (
    <>
      <div className="bg-gray-950 text-white">
        <Navbar />
        <div className="w-[95%] md:w-[80%] lg:w-[75%] my-[10vh] mx-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default App;
