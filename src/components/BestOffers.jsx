import React from "react";
import Carousel from "./carousel/Carousel";
import Skeleton from "./Skeleton";
const BestOffers = ({ bestOffers }) => {
  return (
    <>
      {bestOffers.length == 0 ? (
        <Skeleton size={3} />
      ) : (
        <>
          <h3 className="font-Poppins text-2xl mb-5 font-black">
            Best offers for you
          </h3>
          <Carousel slides={3}>
            {bestOffers.map((offers) => {
              return (
                <div>
                  <img
                    src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/${offers.imageId}`}
                    key={offers.imageId}
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
