import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { API_BASE_URL } from "../utils/constant";
import {
    BestOffers,
    FoodItems,
    BestBrand,
    RestaurantList,
    Skeleton,
} from "../components";
const Home = () => {
    const [bestOffers, setBestOffers] = useState([]);
    const [foodItems, setFoodItems] = useState([]);
    const [bestBrands, setBestBrands] = useState([]);
    const [resList, setResList] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const response = await fetch(API_BASE_URL);
        const ressults = await response.json();
        setBestOffers(ressults?.data?.cards[0]?.card?.card?.imageGridCards?.info);
        setFoodItems(ressults?.data?.cards[1]?.card?.card?.imageGridCards?.info);
        setBestBrands(
            ressults?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants
        );
        setResList(
            ressults?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants
        );
    };
    return (
        <>
          {bestOffers?.length == 0 ? (
            <Skeleton size={3} w="w-1/3" h="h-64" rounded="rounded-3xl" />
          ) : (
            <BestOffers bestOffers={bestOffers} />
          )}
          {foodItems?.length == 0 ? (
            <Skeleton size={9} w="w-40" h="h-40" rounded="rounded-full" />
          ) : (
            <FoodItems foodItems={foodItems} />
          )}
          {bestBrands?.length == 0 ? (
            <Skeleton size={5} w="w-1/3" h="h-64" rounded="rounded-3xl" />
          ) : (
            <BestBrand bestBrands={bestBrands} />
          )}
           {resList?.length == 0 ? (
            <Skeleton size={5} w="w-1/3" h="h-64" rounded="rounded-3xl" />
          ) : (
            <RestaurantList resList={resList} />
          )}
        </>
    );
};
export default Home;
