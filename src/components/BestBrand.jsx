import React from 'react'
import Carousel from "./carousel/Carousel";
import Skeleton from "./Skeleton";
import Title from "./common/Title"
const BestBrand=({bestBrands})=> {
  return (
   <>
      {bestBrands.length == 0 ? (
        <Skeleton size={3} w="w-1/3" h="h-64" rounded="rounded-3xl" />
      ) : (
        <>
          <Title text="Best offers for you" />
          <Carousel slides={3.2}>
            {bestBrands.map((brands) => {
              return (
                <div key={brands?.id}>
                  <img
                    src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/${brands.imageId}`}
                    className="w-[450px] space-x-4"
                  />
                </div>
              );
            })}
          </Carousel>
        </>
      )}
    </>
  )
}

export default BestBrand