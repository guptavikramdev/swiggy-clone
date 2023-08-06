import React from "react";
import { Card, Title } from "./common";

const RestaurantList = ({ resList }) => {
  return (
    <>
      <Title text="Restaurants with online food delivery" />
      <div className="lg:grid lg:grid-cols-4 lg:gap-8 grid grid-cols-1">
        {resList?.map((res) => {
          const resInfo = {
            resName: res?.info?.name,
            areaName: res?.info?.areaName,
            imgUrl: res?.info?.cloudinaryImageId,
            cuisines: res?.info?.cuisines,
            avgRating: res?.info?.avgRating,
          };
          return <Card {...resInfo} key={res?.info?.id} />;
        })}
      </div>
    </>
  );
};

export default RestaurantList;
