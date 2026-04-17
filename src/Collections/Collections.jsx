import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "./CollectionCard";
import { removeFromCollection } from "../redux/slices/collectionSlice.js";

const Collections = () => {
  const { saved } = useSelector((store) => store.collection);
  const dispatch = useDispatch();

  return (
    <div>
      <h1 className="text-center font-semibold text-md">
        Collections of Saved Images
      </h1>
      <div className="mt-[10vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full justify-items-center gap-y-4">
        {saved?.map((item) => {
          return (
            <CollectionCard
              key={item}
              imgSrc={item}
              handleRemovefromCollection={() => {
                dispatch(removeFromCollection(item));
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Collections;
