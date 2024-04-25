import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlintStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header=()=>{

    const [btnNameReact,setbtnNameReact]=useState("Login");
    const onlineStatus=useOnlineStatus();

    const cartItems=useSelector((store)=>store.cart.items);

    return(
        <div className="flex justify-between bg-green-100 shadow-lg mb-2">
            <div ><img className="w-32" src= {LOGO_URL}></img></div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status:{onlineStatus?"✅":"❌"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/contact">Contact</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4"><Link to="/about">About us</Link></li>
                    <Link to="/cart"><li className="px-4">Cart({cartItems.length})</li></Link>
                    <button className="px-4"
                    onClick={()=>{
                        btnNameReact==="Login"?setbtnNameReact("Logout"):setbtnNameReact("Login");
                    }}>{btnNameReact}</button>

                </ul>
            </div>
        </div>
    )
}

export default Header;