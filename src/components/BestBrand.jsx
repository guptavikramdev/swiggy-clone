import React from "react";
import Carousel from "./carousel/Carousel";
import { CarouselCard, Devider } from "./common";
const BestBrand = ({ bestBrands }) => {
  return (
    <>
      <Devider />
      <Carousel slides={4.7} title="Top restaurant">
        {bestBrands?.map((brands) => {
          const resInfo = {
            resName: brands?.info?.name,
            areaName: brands?.info?.areaName,
            imgUrl: brands?.info?.cloudinaryImageId,
            cuisines: brands?.info?.cuisines,
            avgRating: brands?.info?.avgRating,
          };
          return <CarouselCard {...resInfo} key={brands?.info?.id} />;
        })}
      </Carousel>
      <Devider />
    </>
  );
};

export default BestBrand;
