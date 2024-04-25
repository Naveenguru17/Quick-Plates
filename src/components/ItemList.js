import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const ItemList=({items})=>{

    const dispatch=useDispatch();
    
    const handleAddItem=(item)=>{
        dispatch(addItem(item))
    }
    
    return(
        <div>
            {items.map(
                (item)=>(
                    <div className=" border-b border-gray-300">
                        <div className="flex justify-between">
                            <div className="text-left">
                                <h1>{item.card.info.name}</h1>
                                <h1>₹{item.card.info.price/100 || item.card.info.defaultPrice/100}</h1>
                            </div>
                            <div className="w-20 m-4">
                                <img src={CDN_URL+item.card.info.imageId}/>
                                <button 
                                className="bg-black text-white p-2"
                                onClick={()=>handleAddItem(item)}
                                >
                                
                                    Add+
                                </button>
                            </div>
                        </div>
                    </div>
                )
            )}
        </div>
    )
}

export default ItemList;