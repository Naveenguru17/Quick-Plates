import { useEffect, useState } from "react"

const useOnlineStatus=()=>{
    const [onlineStatus,setonlineStatus]=useState(true);
    useEffect(()=>{
        window.addEventListener("offline",()=>{setonlineStatus(false)})
        window.addEventListener("online",()=>{setonlineStatus("online")})

    })
    return onlineStatus;
}

export default useOnlineStatus;