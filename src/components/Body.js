import RestaurantCard,{WithOffer} from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlintStatus";


const Body=()=>{
    
    const [ListOfRestaurants,setListOfRestaurants]=useState([]);
    const [filteredRestaurant,setfilteredRestaurant]=useState([]);
    const [searchText,setsearchText]=useState("");

    const WithOfferRestaurantCard=WithOffer(RestaurantCard);

    useEffect(()=>{
        fetchData();
    },
    []);

    const fetchData=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus=useOnlineStatus();
    if(onlineStatus===false){
        return(
            <h1>Looks like youre offline!Check your internet connection</h1>
        )
    }


    if(ListOfRestaurants.length===0){
        return <Shimmer/>
    }

    return (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=>setsearchText(e.target.value)}/>
                    <button className="px-4 m-4 bg-green-100 rounded-lg"
                    onClick={()=>{
                        console.log(searchText);
                        const filteredrestaurants=ListOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setfilteredRestaurant(filteredrestaurants)
                    }
                    }>Search</button>
                </div>
                <div className="m-4 p-4 flex items-center ">
                    <button className="px-4 m-4 bg-gray-300 rounded-lg"
                    onClick={()=>{
                        const filteredrestaurants=ListOfRestaurants.filter(
                            (res)=>res.info.avgRating>4.0
                        )
                        setfilteredRestaurant(filteredrestaurants);
                    }}>
                        Top Restaurants
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap">
                {filteredRestaurant.map(
                    (restaurant) => (
                    <Link 
                    key={restaurant.info.id}
                    to={"/restaurants/"+restaurant.info.id}>
                        
                        {restaurant.info.aggregatedDiscountInfoV3?
                        <WithOfferRestaurantCard resData={restaurant}/>:
                        <RestaurantCard resData={restaurant}/>}
                    
                    </Link>

                ))}
                
            </div>
        </div>
        
    )
}
export default Body;