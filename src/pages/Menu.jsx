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
    
      {menuInfo?.map((menu) => {
        const { title, itemCards } = menu.card.card;
        return (
          <div className="p-6 mt-5 border-t-[16px] border-gray-200" key={title}>
            <div
              className="text-lg py-4 font-semibold flex items-center justify-between cursor-pointer"
              onClick={() => setShow(!show)}
            >
              {title} ({itemCards.length})
              <Chevrondown />
            </div>
            {show && <MenuList itemCards={itemCards} />}
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
