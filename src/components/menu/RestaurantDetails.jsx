import React from "react";

const RestaurantDetails = ({ restInfo }) => {
  return (
    <div className="pt-10 pb-5 border-b border-dashed flex justify-between items-center">
      <div className="flex flex-col">
        <span className="text-lg font-semibold">{restInfo.name}</span>
        <span className="mt-1 text-sm text-gray-500">
          {restInfo?.cuisines?.join(",")}
        </span>
        <span className="text-sm text-gray-500">
          {restInfo?.areaName},{restInfo?.sla?.lastMileTravelString}
        </span>
      </div>
      <div className="p-2 border rounded-md flex flex-col justify-center items-start">
        <div className="text-center gap-1  pb-2 text-[12px] border-b font-bold w-full text-[#3d9b6d]">
          <span>{restInfo?.avgRatingString}</span>
        </div>
        <span className="text-center mt-2 font-bold text-gray-500 text-[10px] w-full">
          {restInfo?.totalRatingsString}
        </span>
      </div>
    </div>
  );
};

export default RestaurantDetails;
