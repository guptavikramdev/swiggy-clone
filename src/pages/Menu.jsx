import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Chevrondown, StarIcon } from "../components/svgIcons";
import { MenuList } from "../components";
const Menu = () => {
  const [restInfo, setRestInfo] = useState([]);
  const [menuInfo, setMenuInfo] = useState([]);
  const [show, setShow] = useState(false);
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
    console.log(ressults.data?.cards[0]?.card?.card.info);
    const menuData =
      ressults.data?.cards[2]?.groupedCard?.cardGroupMap.REGULAR.cards;
    const menuCategory = menuData?.filter(
      (item) =>
        item.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    setMenuInfo(menuCategory);
  };
  return (
    <div className="lg:w-1/2 w-full  m-auto">
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
      {menuInfo?.map((menu) => {
        const { title, itemCards } = menu.card.card;
        return (
          <div
            className="p-6 mt-5 border-t-[16px]  first:border-t-[2px] border-gray-200"
            key={title}
          >
            <div
              className="text-lg py-4 font-semibold flex items-center justify-between cursor-pointer"
              onClick={() => setShow(!show)}
            >
              {title} ({itemCards.length})
              <Chevrondown />
            </div>
            <MenuList itemCards={itemCards} />
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
