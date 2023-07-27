import React from "react";
import Carousel from "./carousel/Carousel";
import Skeleton from "./Skeleton";
import Title from "./common/Title"
const FoodItems = ({ foodItems }) => {
 
  return (
    <div className="mt-8">
      {foodItems.length == 0 ? (
        <Skeleton size={9}  w="w-40" h="h-40" rounded="rounded-full" />
      ) : (
        <>
          <Title text="What's on your mind?" />
          <Carousel slides={8.5}>
            {foodItems.map((items) => {
              return (
                <div className="w-48 h-48" key={items.imageId}>
                  <img
                    src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/${items.imageId}`}
                    className=" w-full h-full"
                  />
                </div>
              );
            })}
          </Carousel>
        </>
      )}
    </div>
  );
};

export default FoodItems;
