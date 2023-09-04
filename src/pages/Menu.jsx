import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Chevrondown, VegIcon, NonVegIcon } from "../components/svgIcons";
import { CLOUDINARY_URL } from "../utils/constant";
const Menu = () => {
  const [restInfo, setRestInfo] = useState([]);
  const [menuInfo, setMenuInfo] = useState([]);
  const param = useParams();
  const menu_url =
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6083697&lng=77.293112&restaurantId=" +
    param.id;
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(menu_url);
    const ressults = await response.json();
    setRestInfo(ressults.data?.cards[0]?.card?.card.info);
    console.log(ressults.data?.cards[1]?.card?.card);
    const menuData =
      ressults.data?.cards[2]?.groupedCard?.cardGroupMap.REGULAR.cards;
    const menuCategory = menuData?.filter(
      (item) =>
        item.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    console.log(menuCategory);
    setMenuInfo(menuCategory);
  };
  return (
    <div className="w-1/2 m-auto">
      {menuInfo.map((menu) => {
        const { title, itemCards } = menu.card.card;
        return (
          <div
            className="p-6 border-t-[16px] first:border-t-[8px] border-gray-200"
            key={title}
          >
            <div className="text-lg py-4 font-semibold flex items-center justify-between cursor-pointer">
              {title} ({itemCards.length})
              <Chevrondown />
            </div>
            <div className="">
              {itemCards.map((item) => {
                console.log(item);
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
                      <div className="text-xs text-slate-500 mt-3 pr-2">
                        <p>{item.card?.info?.description}</p>
                      </div>
                    </div>
                    <div className="w-28 h-24 relative ">
                      <img
                        src={CLOUDINARY_URL + "/" + item?.card?.info?.imageId}
                        alt=""
                        className="w-full h-full  rounded-md"
                      />
                      <button className="absolute bottom-[-10] hover:shadow-lg hover:shadow-slate-300 transition-shadow duration-300 cursor-pointer font-semibold shadow-md text-secondary-color left-[50%] rounded-[5px] translate-x-[-50%] px-8 py-2 bg-white">
                        Add
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
