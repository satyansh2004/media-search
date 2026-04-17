import Cards from "./Cards";
import Searchbox from "./Searchbox";
import { useSelector, useDispatch } from "react-redux";
import { saveToLocalStorage } from "../redux/slices/collectionSlice.js";
import PageChange from "./PageChange.jsx"
import Tabs from "./Tabs.jsx";

const CardGrid = () => {
  const { results } = useSelector((store) => store.search);

  const dispatch = useDispatch();

  return (
    <>
      <Searchbox />

      <Tabs />

      <div className="mt-[10vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full justify-items-center gap-y-4">
        {results?.map((item) => (
          <Cards
            key={item.id}
            imgSrc={item.url}
            vidSrc={item.video_url}
            handleCollection={() => {
              dispatch(saveToLocalStorage(item.url));
            }}
          />
        ))}
      </div>

      <PageChange />
    </>
  );
};

export default CardGrid;
