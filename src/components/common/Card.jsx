import React from "react";
import { Image } from "./index";
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
      <div className="ml-2">{avgRating}</div>
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
