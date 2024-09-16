import { CDN_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
    const {resData}=props;
    const {name,cuisines,avgRating,sla,cloudinaryImageId,costForTwo}=resData?.info;
    return(
        <div className="m-4 p-4 w-[250] h-[450] bg-gray-100 rounded-lg hover:bg-gray-200 ">
            <img className="h-[200] w-full" alt="reslogo" src={CDN_URL+cloudinaryImageId}></img>
            <h3 className="font-bold py-2 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} Rating</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} mins</h4>
        </div>
    )
}

export const WithOffer=(RestaurantCard)=>{
    return (props)=>{
        console.log(props);
        return(
            <div>
                <h1 className="absolute bg-black text-white p-2 m-2 rounded-lg">{props?.resData?.info?.aggregatedDiscountInfoV3?.header}-{props?.resData?.info?.aggregatedDiscountInfoV3?.subHeader}</h1> 
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;