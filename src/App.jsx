import Navbar from "./components/Navbar";
import { Outlet } from "react-router";
import getGif from "./apis/gifApi.js";
import { useEffect } from "react";

const App = () => {

  useEffect(() => {
    async function hello() {
      const result = await getGif("Cat", 1);
      console.log(result.data)
    }
    hello()
  }, [])

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