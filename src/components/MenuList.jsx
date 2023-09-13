import React from "react";
import { VegIcon, NonVegIcon } from "../components/svgIcons";
import { CLOUDINARY_URL } from "../utils/constant";
const MenuList = ({ itemCards }) => {
  return (
    <div className="">
      {itemCards.map((item) => {
        return (
          <div
            key={item.card?.info?.id}
            className="flex items-start  pb-8 justify-between mb-5 last:border-b-0 border-b-2 border-gray-200"
          >
            <div className="w-10/12">
              <span className="">
                {item.card?.info?.isVeg ? <VegIcon /> : <NonVegIcon />}
              </span>
              <div className="pt-2 text-md font-semibold">
                {item.card?.info?.name}
              </div>
              <div className="text-sm ">
                ₹
                {item.card?.info?.price / 100 ||
                  item.card?.info?.defaultPrice / 100}
              </div>
              <div className="text-xs text-slate-500  mt-3 pr-2">
                <p>{item.card?.info?.description}</p>
              </div>
            </div>
            <div className="w-28 h-24 relative ">
              <img
                src={
                  item?.card?.info?.imageId
                    ? CLOUDINARY_URL + "/" + item?.card?.info?.imageId
                    : "https://picsum.photos/200/300/?blur"
                }
                alt=""
                className="w-full h-full  rounded-md"
                loading="lazy"
              />
              <button className="absolute bottom-[-10] hover:shadow-lg hover:shadow-slate-300 transition-shadow duration-300 cursor-pointer font-semibold shadow-md text-secondary-color left-[50%] rounded-[5px] translate-x-[-50%] px-8 py-2 bg-white">
                Add
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuList;
