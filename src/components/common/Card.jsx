import React from "react";
import { Image } from "./index";
// import { StarIcon } from "../svgIcons";
const Card = ({ imgUrl, resName, avgRating, cuisines, areaName }) => {
  return (
    <div className="cursor-pointer transform transition duration-100 hover:scale-95">
      <div className="w-full h-[250px]">
        <Image
          className="w-full h-full object-cover rounded-2xl"
          imgUrl={imgUrl}
        />
      </div>

      <div className="ml-2 mt-2 text-lg font-black truncate">{resName}</div>
      <div className="ml-2 flex gap-x-1 ">
        {/* <div className="w-5 h-5 bg-green-800 rounded-full flex items-center justify-center">
          1
        </div> */}
        {avgRating}
      </div>
      <div className="ml-2 dark:text-slate-400  text-slate-600 truncate">
        {cuisines.join(",")}
      </div>
      <div className="ml-2 dark:text-slate-400 text-slate-600 truncate">
        {areaName}
      </div>
    </div>
  );
};

export default Card;
