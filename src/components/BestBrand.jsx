import React from "react";
import Carousel from "./carousel/Carousel";
import { Title, CarouselCard, Devider } from "./common";
const BestBrand = ({ bestBrands }) => {
  return (
    <>
      <Devider />
      <Title text="Top restaurant" />
      <Carousel slides={4.7}>
        {bestBrands.map((brands) => {
          const resInfo = {
            resName: brands?.info?.name,
            areaName: brands?.info?.areaName,
            imgUrl: brands?.info?.cloudinaryImageId,
            cuisines: brands?.info?.cuisines,
            avgRating: brands?.info?.avgRating,
          };
          return <CarouselCard {...resInfo}  key={brands?.info?.id} />;
        })}
      </Carousel>
      <Devider />
    </>
  );
};

export default BestBrand;
