import React from "react";
import Carousel from "./carousel/Carousel";
import Skeleton from "./Skeleton";

const FoodItems = ({ foodItems }) => {
  return (
    <>
      {foodItems.length == 0 ? (
        <Skeleton size={3} />
      ) : (
        <>
          <h3 className="font-Poppins text-2xl mb-5 font-black">
            Best offers for you
          </h3>
          <Carousel slides={9}>
            {foodItems.map((items) => {
              return (
                <div>
                  <img
                    src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/${items.imageId}`}
                    key={items.imageId}
                    className=" bg-transparent space-x-4"
                  />
                </div>
              );
            })}
          </Carousel>
        </>
      )}
    </>
  );
};

export default FoodItems;
