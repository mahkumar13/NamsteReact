import { useSelector,useDispatch } from "react-redux"
import ItemList from "./ItemList"
import { clearCart } from "../Utils/cardSlice"


const CartPage= ()=>{
    const cartItems= useSelector((store)=>store.cart.items)
    console.log(cartItems)
    const dispatch = useDispatch();
    const handleClear= ()=>{
    dispatch(clearCart())
    }
    return(
        <div className="text-center m-5 p-10 bg-yellow-50">
            <h1 className="font-bold text-2xl">Cart</h1>
            <div className="w-6/12 m-auto">
                {cartItems.length===0 ?"":
                <button className="bg-green-300 text-zinc-900 font-bold rounded-lg p-2  m-2"
                onClick={handleClear}
               >Clear Cart</button>
                }
            {cartItems.length===0?<h1 className="font-bold text-lg text-red-600">Cart is empty</h1> :""}
            {cartItems.length===0 ?<img  className=" w-9/12 text-center m-auto bg-red-400" src="https://chillydraji.files.wordpress.com/2015/08/empty_cart.jpeg" alt="logo"></img>: <ItemList item={cartItems}></ItemList>}
              
            </div>
        </div>
    )
}
export default CartPage