import React from 'react'
import Carousel from "./carousel/Carousel";
import Title from "./common/Title"
import Card from "./common/Card"
const BestBrand=({bestBrands})=> {
  return (
  
        <>
          <Title text="Best offers for you" />
          <Carousel slides={4.7}>
            {bestBrands.map((brands) => {
               const resInfo={
                 resName: brands?.info?.name,
                 areaName:brands?.info?.areaName,
                 imgUrl:brands?.info?.cloudinaryImageId,
                 cuisines:brands?.info?.cuisines,
                 avgRating:brands?.info?.avgRating
               }
              return (
                  <Card {...resInfo} key={brands?.id} />
              );
            })}
          </Carousel>
        </>
     
  )
}

export default BestBrand