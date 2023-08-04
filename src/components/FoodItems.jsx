import React from "react";
import Carousel from "./carousel/Carousel";
import { Title, Image } from "./common";
const FoodItems = ({ foodItems }) => {
  return (
    <div className="mt-8">
      <Title text="What's on your mind?" />
      <Carousel slides={8.5} isFoodCarousel="true">
        {foodItems.map((items) => {
          return (
            <div className="w-48 h-48" key={items.imageId}>
              <Image className="w-full h-full" imgUrl={items.imageId} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default FoodItems;
