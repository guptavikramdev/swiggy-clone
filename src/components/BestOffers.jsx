import React from "react";
import Carousel from "./carousel/Carousel";
import { Title, Image } from "./common";
const BestOffers = ({ bestOffers }) => {
  return (
    <>
      <Title text="Best offers for you" />
      <Carousel slides={3.2}>
        {bestOffers.map((offers) => {
          return (
            <div key={offers.imageId}>
             <Image className="w-full h-full" imgUrl={offers.imageId} />
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default BestOffers;
