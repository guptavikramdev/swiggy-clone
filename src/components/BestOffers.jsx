import React from "react";
import Carousel from "./carousel/Carousel";
import Title from "./common/Title";
const BestOffers = ({ bestOffers }) => {
  return (
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
  );
};

export default BestOffers;
