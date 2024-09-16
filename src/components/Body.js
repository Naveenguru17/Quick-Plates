import RestaurantCard, { WithOffer } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlintStatus";

const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchText, setsearchText] = useState("");

  const WithOfferRestaurantCard = WithOffer(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>Looks like you're offline! Check your internet connection</h1>;
  }

  if (ListOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body p-4">
      <div className="filter flex flex-col md:flex-row items-center justify-between">
        {/* Search Section */}
        <div className="search m-4 p-4 flex flex-col md:flex-row items-center">
          <input
            type="text"
            className="border border-solid border-gray-400 p-2 rounded-md w-full md:w-auto"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => setsearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 mt-2 md:mt-0 md:ml-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all shadow-md"
            onClick={() => {
              const filteredrestaurants = ListOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurant(filteredrestaurants);
            }}
          >
            Search
          </button>
        </div>

        {/* Top Restaurants Button */}
        <div className="m-4 p-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all shadow-md"
            onClick={() => {
              const filteredrestaurants = ListOfRestaurants.filter(
                (res) => res.info.avgRating > 4.0
              );
              setfilteredRestaurant(filteredrestaurants);
            }}
          >
            Top Restaurants
          </button>
        </div>
      </div>

      {/* Restaurant Cards Section */}
      <div className="flex flex-wrap justify-start gap-4">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
            {restaurant.info.aggregatedDiscountInfoV3 ? (
              <WithOfferRestaurantCard resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
