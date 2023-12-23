import { CDN_URL } from "../Utils/constants"

const ItemList= ({item})=>{
    console.log(CDN_URL+"mwzbjlbf4lg7t1cujphg")
console.log(item)
return(
    <div>
        {item.map((item)=>(
            <div key={item.card.info.id}
             className="p-2 m-2 border b-2 text-left  bg-orange-100 border-b-orange-300 flex justify-between   "
            >
           <div className="w-9/12">
           <div className="py-2 flex justify-between ">
            <span className=" font-bold text-3xl  text-red-600">{item.card.info.name}</span>  
           </div>
           <h1 className="font-bold text-3xl m-4 text-pink-600"> ₹{item.card.info.price/100 || item.card.info.defaultPrice/100}</h1>
           <p className="text-xl font-bold" >{item.card.info.description}</p>
           </div>
         <div className="w-3/12 p-4">
            <div className="absolute">
            <button className="p-2 m-2 bg-green-300 shadow-lg rounded-lg "> Add +</button>
             </div>
           <img src={ CDN_URL+ item.card?.info?.imageId||CDN_URL+"mwzbjlbf4lg7t1cujphg" } alt=""></img>
           
        </div>
        </div>
        ))}
    </div>
)
}
export default ItemList