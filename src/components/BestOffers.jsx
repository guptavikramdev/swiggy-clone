import React from "react";
import Carousel from "./carousel/Carousel";
import Skeleton from "./Skeleton";
import  Title  from "./common/Title";
const BestOffers = ({ bestOffers }) => {
  return (
    <>
      {bestOffers.length == 0 ? (
        <Skeleton size={3} w="w-1/3" h="h-64" rounded="rounded-3xl" />
      ) : (
        <>
          <Title text="Best offers for you" />
          <Carousel slides={3.2}>
            {bestOffers.map((offers) => {
              return (
                <div key={offers.imageId}>
                  <img
                    src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/${offers.imageId}`}
                    className="w-[450px] space-x-4"
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

export default BestOffers;