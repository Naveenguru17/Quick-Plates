import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResCategories from "./ResCategories";
import { useState } from "react";


const RestaurantMenu=()=>{

    //const [resInfo,setresInfo]=useState(null);
    const {resId}=useParams();

    const [showIndex,setshowIndex]=useState(1);


    const resInfo=useRestaurantMenu(resId);
    console.log(resInfo);

    if(resInfo===null){
        return <Shimmer/>
    }

    const{name,costForTwo,cuisines}=resInfo?.data?.cards[0]?.card?.card?.info;
    const items=resInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
        (cards)=>cards?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )


    return(
        <div className="text-center">
            <h1 className="font-bold m-2 text-lg">{name}</h1>
            <h1 className="font-semibold m-2">{cuisines.join(", ")}-{costForTwo/100}</h1>
            {items.map(
                (category,index)=>(
                    <ResCategories 
                    key={category?.card?.card?.title}
                    data={category?.card?.card}
                    showItems={index===showIndex && true}
                    setshowIndex={()=>setshowIndex(index)}
                    />
                    
                )
            )
            }

        </div>
    )
}
export default RestaurantMenu;