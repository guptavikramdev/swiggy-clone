import React from "react";
import Carousel from "./carousel/Carousel";
import { Image } from "./common";
const BestOffers = ({ bestOffers }) => {
  return (
    <>
      <Carousel slides={3.2} title="Best offers for you">
        {bestOffers?.map((offers) => {
          return (
            <div key={offers?.imageId}>
              <Image className="w-full h-full" imgUrl={offers?.imageId} />
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default BestOffers;
