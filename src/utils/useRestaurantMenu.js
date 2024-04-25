import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu=(resId)=>{

    const [resInfo,setresInfo]=useState(null);

    useEffect(()=>{
        fetchres();
    },[])

    const fetchres=async()=>{
        const data=await fetch(MENU_URL+resId);
        const json=await data.json();
        setresInfo(json);
    }
    return resInfo;
}

export default useRestaurantMenu;