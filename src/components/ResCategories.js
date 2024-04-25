
import ItemList from "./ItemList";

const ResCategories=({data,showItems,setshowIndex})=>{

    const handleClick=()=>{
        setshowIndex()
    }

    return(
        <div>
            <div className="p-2 mx-auto my-2 w-2/4 shadow-lg bg-gray-100 ">
                <div className="flex justify-between cursor-pointer"
                onClick={handleClick}>
                    <span className="font-bold">{data.title}</span>
                    <span>🔽</span>
                </div>
                {showItems && <ItemList items={data.itemCards}/>}
            </div>
            
        </div>
    )
}

export default ResCategories;