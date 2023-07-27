import React, { useState, useEffect } from "react";
import { Header,BestOffers, FoodItems, Footer } from "./components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FoodItems from "./components/FoodItems";

export default App = () => {
  const [bestOffers,setBestOffers] = useState([]);
  const [foodItems,setFoodItems] = useState([]);
  useEffect(() => {
    fetchData()

  }, []);
  const fetchData = async ()=>{
      const response= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6083697&lng=77.293112&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const ressults= await response.json();
      setBestOffers(ressults?.data?.cards[0]?.card?.card?.imageGridCards?.info)
      setFoodItems(ressults?.data?.cards[1]?.card?.card?.imageGridCards?.info)
      console.log(ressults?.data?.cards[1]?.card?.card?.imageGridCards?.info)
  }

  return (
    <>
      <div className=" dark:bg-slate-900 dark:text-slate-300 w-full h-screen font-Poppins">
        <Header />
        <div className="container m-auto mt-14">
          <BestOffers bestOffers={bestOffers} />
          <FoodItems foodItems={foodItems} />
          {/* <Carousel carouselImage={carouselImage} /> */}
          {/* <Main /> */}
        </div>
        <Footer />
      </div>
      
    </>
  );
};
