import React from "react";
import { Image } from "./index";
import { StarIcon } from "../svgIcons";
const Card = ({ imgUrl, resName, avgRating, cuisines, areaName }) => {
  return (
    <div className="cursor-pointer transform transition duration-100 hover:scale-95">
      <Image
        className="lg:w-[300px] w-full h-[200px] object-cover rounded-2xl"
        imgUrl={imgUrl}
      />
      <div className="ml-2 mt-2 text-lg font-black truncate">{resName}</div>
      <div className="ml-2 flex gap-x-1 ">
        <div className="w-5 h-5 bg-secondary-color rounded-full flex items-center justify-center">
          <StarIcon />
        </div>
        {avgRating}
      </div>
      <div className="ml-2 dark:text-slate-400 truncate text-slate-600 ">
        {cuisines.join(",")}
      </div>
      <div className="ml-2 dark:text-slate-400 truncate text-slate-600 ">
        {areaName}
      </div>
    </div>
  );
};

export default Card;
