import React from "react";
import { Image } from "./index";
import { StarIcon } from "../svgIcons";
import { Link } from "react-router-dom";
const Card = ({ resId, imgUrl, resName, avgRating, cuisines, areaName }) => {
  return (
    <Link to={`/menu/${resId}`}>
      <div className="cursor-pointer  transform transition duration-100 hover:scale-95">
        <div className="w-full h-[250px]">
          <Image
            className="w-full h-full object-cover rounded-2xl shadow-md shadow-slate-200"
            imgUrl={imgUrl}
          />
        </div>

        <div className="ml-2 mt-2 text-lg font-black truncate">{resName}</div>
        <div className="ml-2 flex gap-x-1 ">
          <div className="w-5 h-5 bg-secondary-color rounded-full flex items-center justify-center">
            <StarIcon />
          </div>
          {avgRating}
        </div>
        <div className="ml-2 dark:text-slate-400  text-slate-600 truncate">
          {cuisines.join(",")}
        </div>
        <div className="ml-2 dark:text-slate-400 text-slate-600 truncate">
          {areaName}
        </div>
      </div>
    </Link>
  );
};

export default Card;
